import "dotenv/config";

import { ScraperType } from "./generated/prisma";
import { scrapeSources } from "./importer";
import scrape from "./scrapers/greenwich"



const log = (data) => {
  console.log(data)
  return data
}

scrape().then(log)