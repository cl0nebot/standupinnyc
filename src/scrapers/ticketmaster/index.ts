import { flatten } from "lodash";
import { getEvents } from "./getEvents";
import { getInSequence } from "../../utils";
import {Scraper} from "../interfaces";

const ticketmaster: Scraper = {
  getShowsForVenue: getEvents,
  idField: "ticketmasterId"
}


export default ticketmaster