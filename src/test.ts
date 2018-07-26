import db from "./db";
import {Venue, ScraperType} from "./generated/prisma"
import {importShows} from "./importer"

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
