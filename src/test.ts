import { scrapeSource } from "./scraper";

import fetchReservations from "./scrapers/comedycellar/fetchReservations"


fetchReservations("2018-08-23").then(log).catch(err => console.error(err))
scrapeSource("COMEDYCELLAR").then(log)
function log(data) {
  console.log(data);
  return data;
}
