import { Venue, ScraperType } from "./generated/prisma";
import findOrCreateShows from "./findOrCreateShows";
import SCRAPER_MAPPING from "./scrapers";
import { ScrapedShow } from "./scrapers/interfaces";
import db from "./db"
const getShows = async (venue: Venue): Promise<ScrapedShow[]> => {
  const scraper = SCRAPER_MAPPING[venue.scraper];
  const id = venue[scraper.idField];
  return scraper.getShowsForVenue(id);
};

export async function importShows(venue: Venue) {
  const showData = await getShows(venue);
  const showIds = await findOrCreateShows(showData, venue.id);
  console.log(`${showIds.length} updated for ${venue.name}`);
  return showIds;
}

export async function scrapeSources(sources: ScraperType[]) {
  const venues = await db.query.venues({ where: { scraper_in: sources } });
  const results = await Promise.all(venues.map(importShows));
  return results;
}

export async function updateShowsForVenue({ where }) {
  try {
  const venue = await db.query.venue({ where });
  const showIds = await importShows(venue);

  const status = {success: true, message: `${venue.scraper} - ${showIds.length} updated for ${venue.id}` }
  return status

  }

  catch(e) {

    console.error("lookup failed!", e)
    return {success: false, query: where}
  }
}
