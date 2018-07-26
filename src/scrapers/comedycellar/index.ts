import { find, flatten, compact } from "lodash";
import * as moment from "moment";

import fetchLineups from "./fetchLineups";
import fetchReservations from "./fetchReservations";




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
// Fetch both ticket availability and lineup information
// and merge the two results
function fetchShowsForDate(date: string) {
  const reservationPromise = fetchReservations(date);
  const lineupPromise = fetchLineups(date);

  return Promise.all([reservationPromise, lineupPromise]).then(
    combineLineupAndReservationData
  );
}
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

async function getUpcomingShows(maxDays = 7) {
  const dates = getUpcomingDateStrings(maxDays);
  console.log(`fetching shows for ${dates.join(",")}`);
  const showPromises = dates.map(fetchShowsForDate);
  return Promise.all(showPromises).then(data => flatten(data));
}

function removeVenueSlug(show) {
  const {venueSlug, ...showWithoutVenueSlug} = show
  return showWithoutVenueSlug
}

export async function getShowsForVenue(slug) {
  const allShows = await getUpcomingShows()
  console.log("Shows found:", allShows)
  const venueShows = allShows.filter((lineup) => lineup.venueSlug === slug).map(removeVenueSlug)
  console.log(slug, venueShows.length)
  return venueShows

}

const comedycellar = {
  getShowsForVenue,
  idField: "slug"
}

export default comedycellar