import { scrapeSource } from "./scraper";

scrapeSource("STUBSITES").then(log);
// saveOutput("COMEDYCELLAR")
function log(data) {
  console.log(data);
  return data;
}
