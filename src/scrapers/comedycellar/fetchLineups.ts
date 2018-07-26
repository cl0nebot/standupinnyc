import axios from "axios";
import * as cheerio from "cheerio";

// fetch html lineup info and parse out the comedian info
// endpoints accepts a date in seconds since epoch
// http://www.comedycellar.com/line-up/?_date=1515369600
export default function fetchLineups(dateString: string) {
  const [year, month, day] = dateString.split("-");
  const dateInEpochSeconds =
    Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)) / 1000;
  const url = `http://www.comedycellar.com/line-up`;
  console.log(dateInEpochSeconds);
  return axios({
    method: "get",
    params: {
      _date: dateInEpochSeconds,
    },
    url: url,
  }).then(response => parseLineupHtml(response.data));
}
// get all lineups for a given day
export async function fetchLineupsForVenue(venueSlug: string, dateString: string) {
  const lineups = await fetchLineups(dateString)
  return lineups.filter((lineup) => lineup.venueSlug === venueSlug)
}

const lineupSelectors = {
  showContainer: ".show",
  timeAndVenue: ".show-time", // page  displays the time and venue within the same selector
  comedian: {
    container: ".comedian-block",
    name: ".comedian-block-desc-name",
    website: ".comedian-website-link",
    imageUrl: ".comedian-block-image > img",
  },
  reservationLink: ".make-comedy-reservation-link",
};

const parseLineupHtml = html => {
  const $ = cheerio.load(html);

  const showsFound = [];
  $(lineupSelectors.showContainer).each(function() {
    // TODO figure out a better way to pass context here
    const show = parseShowHtml($, this);
    if (validShow(show)) {
      showsFound.push(show);
    }
  });
  return showsFound;
};

// Lineup  comes from the html lineup page while reservation and info and if it's sold out come from the
// json reservation api, and they need to be stitched together by id

const parseShowHtml = ($, showHtml) => {
  const venueRaw = $(showHtml)
    .find(lineupSelectors.timeAndVenue)
    .text()
    .split("|")
    .map(string => string.trim())[1];
  const checkoutUrl = $(showHtml)
    .find(lineupSelectors.reservationLink)
    .attr("href");
  const venueSlug = getVenueSlug(venueRaw);
  const showId = parseInt(checkoutUrl.split("?showid=")[1]);
  const comedians = [];

  $(showHtml)
    .find(lineupSelectors.comedian.container)
    .each(function() {
      const nameArray = $(this)
        .find(lineupSelectors.comedian.name)
        .text()
        .trim()
        .split(":");
      const name = nameArray[nameArray.length - 1].trim();

      const website = $(this)
        .find(lineupSelectors.comedian.website)
        .attr("href");
      // thumbnail url on this page is tiny but we can find the original by stripping 70x70 from the url
      const smallImageUrl = $(this)
        .find(lineupSelectors.comedian.imageUrl)
        .attr("src");
      const imageUrl = smallImageUrl.replace(/-70x70\.jpg$/, ".jpg");
      comedians.push({
        name,
        website,
        imageUrl,
      });
    });

  return {
    cellarId: showId,
    checkoutUrl: checkoutUrl,
    venueSlug: venueSlug,
    comedians: comedians,
  };
};

function getVenueSlug(location: string) {
  if (location.toLowerCase().indexOf("macdougal") > -1) {
    return "comedycellar";
  }
  if (location.toLowerCase().indexOf("village") > -1) {
    return "villageunderground";
  }
  return false;
}

// A show is valid if
// - it has more than one comedian, which means the linup has been set (rather than just an mc)
// - it's location is comedy cellar or village underground (the api returns a couple other venues as well)
const validShow = show =>
  show.venueSlug && show.comedians && show.comedians.length > 1;
