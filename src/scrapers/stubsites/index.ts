import { getShowsForVenue } from "./fetchShows";
import {Scraper} from "../interfaces"

const stubsites: Scraper = {
  getShowsForVenue,
  idField: "stubsiteId"
}
export default stubsites