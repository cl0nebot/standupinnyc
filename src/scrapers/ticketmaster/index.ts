import { flatten } from "lodash";
import { getEvents } from "./getEvents";
import { getInSequence } from "../../utils";


const ticketmaster = {
  getShowsForVenue: getEvents,
  idField: "ticketmasterId"
}

export default ticketmaster