import {
  chain,
  map,
  flatten,
  uniqBy,
  value,
  find,
  filter,
  compact,
} from "lodash";

import { slugify } from "./utils";

// Queries
const fetchComediansBySlugs = (prisma, slugs: string[]) => {
  return prisma.query.comedians(
    {
      where: {
        slug_in: slugs,
      },
    },
    "{ id slug }"
  );
};

const createComedian = (prisma, comedian) => {
  return prisma.mutation.createComedian(
    {
      data: comedian,
    },
    "{ id slug }"
  );
};

const upsertShow = async (prisma, show) => {
  const {
    stubsiteId,
    cellarId,
    ticketmasterId,
    soldOut,
    price,
    comedians,
  } = show;
  const where = { stubsiteId, cellarId, ticketmasterId };
  const existingShow = await prisma.query.show(
    { where },
    `{id comedians {id}}`
  );

  if (existingShow) {
    const newComedians = {
      connect: filter(
        comedians.connect,
        comedian => !find(existingShow.comedians, { id: comedian.id })
      ),
    };
    return prisma.mutation.updateShow(
      {
        where: {
          id: existingShow.id,
        },
        data: {
          soldOut,
          price,
          comedians: newComedians,
        },
      },
      "{id}"
    );
  } else {
    return prisma.mutation.createShow(
      {
        data: show,
      },
      `{id}`
    );
  }
};

const createComedians = (prisma, comedians) => Promise.all(comedians.map(comedian =>createComedian(prisma, comedian)));
const upsertShows = (prisma, shows) => getInSequence(shows, (show) =>
  upsertShow(prisma, show));

const findExistingComedians = (prisma, comedians) => {
  const slugs = map(comedians, "slug");
  return fetchComediansBySlugs(prisma, slugs).then(comedianSlugIdTuples => {
    return map(comedians, comedian => {
      const dbRecord = find(comedianSlugIdTuples, { slug: comedian.slug });
      if (dbRecord) {
        comedian.id = dbRecord.id;
      }
      return comedian;
    });
  });
};

const findOrCreateComedians = async (prisma, shows) => {
  console.log(JSON.stringify(shows));
  const uniqComedians = chain(shows)
    .map("comedians")
    .flatten()
    .uniqBy("slug")
    .value();
  // Get the ids of all existing comedians
  const comediansWithIds = await findExistingComedians(prisma, uniqComedians);

  const existingComedians = filter(comediansWithIds, "id");
  const newComedians = filter(comediansWithIds, comedian => !comedian.id);
  const createdComedians = await createComedians(prisma, newComedians);
  return flatten(existingComedians, createdComedians);
};

const addSlugToShowsComedians = shows => map(shows, addSlugToShowComedians);

function addSlugToShowComedians(show) {
  show.comedians = map(show.comedians, slugifyComedian);
  return show;
}
const slugifyComedian = comedian => {
  comedian.slug = slugify(comedian.name);
  return comedian;
};

const bulkFormatShowsAndFindOrCreateComedians = async (prisma, shows) => {
  const showsWithSlugs = addSlugToShowsComedians(shows);
  const allComedians = await findOrCreateComedians(prisma, shows);
  const showsForInsert = showsWithSlugs.map(show =>
    formatShowForInsert(show, allComedians)
  );
  return showsForInsert;
};

const findOrCreateShows = (prisma, shows) => {
  return bulkFormatShowsAndFindOrCreateComedians(prisma, shows).then(shows => upsertShows(prisma, shows));
};

export { findOrCreateShows };

function formatShowForInsert(showData, allComedians) {
  const { venueId, venueSlug, comedians, ...showInfo } = showData;
  const comedianConnectIds = getComedianIds(comedians, allComedians);
  return {
    venue: {
      connect: {
        id: venueId,
      },
    },
    comedians: {
      connect: comedianConnectIds,
    },
    ...showInfo,
  };
}

function getComedianIds(comedians, allComedians) {
  const ids = chain(comedians)
    .map(comedian => {
      const existingComedian = find(allComedians, { slug: comedian.slug });
      if (existingComedian) {
        return {
          id: existingComedian.id,
        };
      }
    })
    .compact()
    .value();
  return ids;
}

function log(data) {
  console.log(data);
  return data;
}

function getInSequence(array, asyncFunc) {
  return array.reduce(
    (previous, current) =>
      previous.then(accumulator =>
        asyncFunc(current).then(result => accumulator.concat(result))
      ),
    Promise.resolve([])
  );
}
