import db from "./db";
import { ScraperType } from "./generated/prisma";
import { importShows } from "./importer";

async function scrapeSources(sources: ScraperType[]) {
  const venues = await db.query.venues({ where: { scraper_in: sources } });
  const results = await Promise.all(venues.map(importShows));
  return results;
}

scrapeSources(["COMEDYCELLAR", "STUBSITES"]);
