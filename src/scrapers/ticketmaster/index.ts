import { getEvents } from "./getEvents";
import { Scraper } from "../interfaces";

const ticketmaster: Scraper = {
  getShowsForVenue: getEvents,
  idField: "ticketmasterId"
};

export default ticketmaster;
