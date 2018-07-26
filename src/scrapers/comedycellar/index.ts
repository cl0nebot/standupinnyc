import { find, flatten, compact } from "lodash";
import * as moment from "moment";

import fetchLineups from "./fetchLineups";
import fetchReservations from "./fetchReservations";

export async function scrapeVenues(venues) {
  const addVenueIdFromVenueSlug = venueMapper(venues);
  console.log(venues);
  return getUpcomingShows().then(shows => shows.map(addVenueIdFromVenueSlug));
}

export async function getUpcomingShows(maxDays = 7) {
  const dates = getUpcomingDateStrings(maxDays);
  console.log(`fetching shows for ${dates.join(",")}`);
  const showPromises = dates.map(fetchShowsForDate);
  return Promise.all(showPromises).then(data => flatten(data));
}

// Fetch both ticket availability and lineup information
// and merge the two results
export async function fetchShowsForDate(date: string) {
  const reservationPromise = fetchReservations(date);
  const lineupPromise = fetchLineups(date);

  return Promise.all([reservationPromise, lineupPromise]).then(
    combineLineupAndReservationData
  );
}

const combineLineupAndReservationData = ([reservationData, lineupData]) => {
  const shows = lineupData.map(lineup => {
    // console.log(data.timestamp)
    const reservation = find(reservationData, { timestamp: lineup.cellarId });
    if (reservation) {
      lineup.startTime = moment(reservation.timestamp * 1000).toDate();
      delete reservation.timestamp;
      const show = Object.assign(lineup, reservation);
      return show;
    }
  });
  return compact(shows);
};
// returns a function to convert location slugs into venue ids
const venueMapper = venues => {
  return show => {
    show.venueId = find(venues, { slug: show.venueSlug }).id;
    delete show.venueSlug;
    return show;
  };
};

const getUpcomingDateStrings = maxDays => {
  const dates = [];
  let days: number = 0;
  const currentDate = moment();
  while (days < maxDays) {
    const dateString = currentDate
      .clone()
      .add(days, "day")
      .format("YYYY-MM-DD");
    dates.push(dateString);
    days = days + 1;
  }
  return dates;
};
