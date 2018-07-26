import { flatten } from "lodash";
import { getEvents } from "./getEvents";
import { getInSequence } from "../../utils";

export function scrapeVenues(venues) {
  // const scrapers = getInSequence(venues, scrapeVenue);
  return getInSequence(venues, scrapeVenue).then(shows => flatten(shows));
}

function scrapeVenue({ id, name, ticketmasterId }) {
  console.log("Scraping ", name, id);
  return getEvents({ ticketmasterId }).then(shows => addVenueId(shows, id));
}

function addVenueId(shows, id) {
  return shows.map((show: any) => {
    show.venueId = id;
    return show;
  });
}
