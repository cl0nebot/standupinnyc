import { scrapeSource } from "./scraper";
import db from "./db";
import {Venue} from "./generated/prisma"

import SCRAPER_MAPPING from "./scrapers"
const getShows = async (venue: Venue) => {
  const scraper = SCRAPER_MAPPING[venue.scraper]
  return scraper.getShowsForVenue(venue)
}

async function scrape() {
  const venue = await db.query.venue({where: {slug: "standupny"}}, "{ id scraper name stubsiteId ticketmasterId slug}")
  console.log(venue.name)
  const shows = await getShows(venue)
  console.log(shows)
  return shows
}

scrape()
// getShowsForVenue("comedycellar")
//   .then(shows => console.log("comedycellar", shows.length)).catch(err => console.error(err))

// getShowsForVenue("villageunderground")
//   .then(shows => console.log("villageunderground", shows.length)).catch(err => console.error(err))

function log(data) {
  console.log(data);
  return data;
}
