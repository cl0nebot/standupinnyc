import { chain, map, flatten, find, filter } from "lodash";
import db from "./db";
import { ComedianCreateInput } from "./generated/prisma";
import { ScrapedShow, ScrapedComedian } from "./scrapers/interfaces";
import { slugify, getInSequence } from "./utils";

// Queries
const fetchComediansBySlugs = (slugs: string[]) => {
  return db.query.comedians(
    {
      where: {
        slug_in: slugs
      }
    },
    "{ id slug }"
  );
};

const createComedian = comedian => {
  return db.mutation.createComedian(
    {
      data: comedian
    },
    "{ id slug }"
  );
};

const upsertShow = async show => {
  const {
    stubsiteId,
    cellarId,
    ticketmasterId,
    soldOut,
    price,
    comedians
  } = show;
  const where = { stubsiteId, cellarId, ticketmasterId };
  const existingShow = await db.query.show({ where }, `{id comedians {id}}`);

  if (existingShow) {
    const newComedians = {
      connect: filter(
        comedians.connect,
        comedian => !find(existingShow.comedians, { id: comedian.id })
      )
    };
    return db.mutation.updateShow(
      {
        where: {
          id: existingShow.id
        },
        data: {
          soldOut,
          price,
          comedians: newComedians
        }
      },
      "{id}"
    );
  }
  return db.mutation.createShow(
    {
      data: show
    },
    `{id}`
  );
};
const upsertShows = shows =>
  getInSequence(shows, show => upsertShow(show).then(show => show.id));

const createComedians = (comedians: ScrapedComedian[]) =>
  Promise.all(comedians.map(comedian => createComedian(comedian)));

const findExistingComedians = comedians => {
  const slugs = map(comedians, "slug");
  return fetchComediansBySlugs(slugs).then(comedianSlugIdTuples => {
    return map(comedians, comedian => {
      const dbRecord = find(comedianSlugIdTuples, {
        slug: comedian.slug
      }) as any;
      if (dbRecord && dbRecord.id) {
        comedian.id = dbRecord.id;
      }
      return comedian;
    });
  });
};

const findOrCreateComedians = async shows => {
  console.log(JSON.stringify(shows));
  const uniqComedians = chain(shows)
    .map("comedians")
    .flatten()
    .uniqBy("slug")
    .value();
  // Get the ids of all existing comedians
  const comediansWithIds = await findExistingComedians(uniqComedians);

  const existingComedians = filter(comediansWithIds, "id");
  const newComedians = filter(comediansWithIds, comedian => !comedian.id);
  const createdComedians = await createComedians(newComedians);
  return flatten([existingComedians, createdComedians]);
};

const addSlugToShowsComedians = shows => map(shows, addSlugToShowComedians);

function addSlugToShowComedians(show: ScrapedShow) {
  show.comedians = map(show.comedians, slugifyComedian);
  return show;
}
const slugifyComedian = (scrapedComedian: ScrapedComedian) => {
  const comedian: ComedianCreateInput = {
    ...scrapedComedian,
    slug: slugify(scrapedComedian.name)
  };
  return comedian;
};

const bulkFormatShowsAndFindOrCreateComedians = async (shows, venueId) => {
  const showsWithSlugs = addSlugToShowsComedians(shows);
  const allComedians = await findOrCreateComedians(shows);
  const showsForInsert = showsWithSlugs.map(show =>
    formatShowForInsert(show, allComedians, venueId)
  );
  console.log(showsForInsert);
  return showsForInsert;
};

function formatShowForInsert(showData, allComedians, venueId) {
  const { comedians, ...showInfo } = showData;
  const comedianConnectIds = getComedianIds(comedians, allComedians);
  return {
    venue: {
      connect: {
        id: venueId
      }
    },
    comedians: {
      connect: comedianConnectIds
    },
    ...showInfo
  };
}

function getComedianIds(comedians, allComedians) {
  const ids = chain(comedians)
    .map(comedian => {
      const existingComedian = find(allComedians, {
        slug: comedian.slug
      }) as any;
      if (existingComedian) {
        return {
          id: existingComedian.id
        };
      }
    })
    .compact()
    .value();
  return ids;
}

export default function findOrCreateShows(
  shows: ScrapedShow[],
  venueId: string
) {
  return bulkFormatShowsAndFindOrCreateComedians(shows, venueId).then(shows =>
    upsertShows(shows)
  );
}
