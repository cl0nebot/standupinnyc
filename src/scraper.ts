import { scrapeVenues as cellarScraper } from "./scrapers/comedycellar";
import { scrapeVenues as stubsiteScraper } from "./scrapers/stubsites";
import { scrapeVenues as ticketmasterScraper } from "./scrapers/ticketmaster";
import { getVenuesForScraper } from "./db";

const scrapers = {
  STUBSITES: stubsiteScraper,
  COMEDYCELLAR: cellarScraper,
  TICKETMASTER: ticketmasterScraper,
};
const sources = Object.keys(scrapers);

const scrape = scraperType => {
  const scraper = scrapers[scraperType];
  return getVenuesForScraper({ scraper: scraperType }).then(scraper);
};

const scrapeSource = scraperType => {
  return scrape(scraperType)
};

export { sources, scrapeSource, scrape };
