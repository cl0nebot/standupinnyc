import { Venue } from "./generated/prisma";
import findOrCreateShows from "./findOrCreateShows";
import SCRAPER_MAPPING from "./scrapers";
import { ScrapedShow } from "./scrapers/interfaces";
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
