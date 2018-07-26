import { getShowsForVenue } from "./fetchShows";

import { flatten } from "lodash";

export function scrapeVenues(venues) {
  const scrapers = venues.map(scrapeVenue);
  return Promise.all(scrapers).then(shows => flatten(shows));
}

function scrapeVenue({ id, name, stubsiteId }) {
  console.log("Scraping ", name, id);
  return getShowsForVenue({ stubsiteId }).then(shows => addVenueId(shows, id));
}


function addVenueId(shows, id) {
  return shows.map((show: any) => {
    show.venueId = id;
    return show;
  });
}
