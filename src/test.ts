import db from "./db";
import {Venue, ScraperType} from "./generated/prisma"
import {findOrCreateShows} from "./formatComedians"
import SCRAPER_MAPPING from "./scrapers"
import {writeJson} from "fs-extra"
const getShows = async (venue: Venue) => {
  const scraper = SCRAPER_MAPPING[venue.scraper]
  const id = venue[scraper.idField]
  return scraper.getShowsForVenue(id)
}

async function importShows(venue: Venue)  {
  const showData = await getShows(venue)
  const shows = await findOrCreateShows(showData, venue.id)
  console.log(`${shows.length} updated for ${venue.name}`)
  return shows
}


async function scrapeSources(sources: ScraperType[]) {
  const venues = await db.query.venues({where: {scraper_in: sources}})
  const results = await Promise.all(venues.map(importShows))
  return results
}


scrapeSources(["COMEDYCELLAR", "STUBSITES"])

function log(data) {
  console.log(data);
  return data;
}
