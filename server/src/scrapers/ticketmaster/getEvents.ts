import Axios from "axios";
import { find } from "lodash";
import { ScrapedShow } from "../interfaces";

const baseUrl = "https://app.ticketmaster.com/discovery/v2/";

const axios = Axios.create({
  baseURL: baseUrl,
  params: {
    apikey: process.env.TICKETMASTER_API_KEY
  }
});

function fetchEvents(ticketmasterId: string) {
  return axios
    .get("events", {
      params: {
        venueId: ticketmasterId,
        size: 100
      }
    })
    .then(response => {
      console.log(response.data);
      return response;
    })
    .then(response => {
      if (response.data.page.totalElements > 0) {
        return response.data._embedded.events;
      }
      return [];
    });
}

function formatAttractionAsComedian({ id, name, images }) {
  const comedian = {
    name,
    ticketmasterId: id,
    imageUrl: undefined
  };
  const image = find(images);
  if (image) {
    comedian.imageUrl = image.url;
  }
  return comedian;
}

function formatAttractions(attractions = []) {
  return attractions.map(formatAttractionAsComedian);
}

function formatEventAsShow(event: any): ScrapedShow {
  const {
    name,
    id,
    url,
    dates: {
      start: { dateTime }
    },
    _embedded: { attractions }
  } = event;
  const comedians = formatAttractions(attractions);

  return {
    name,
    comedians,
    ticketmasterId: id,
    checkoutUrl: url,
    startTime: dateTime
  };
}

function formatEvents(events: any[]) {
  return events.map(formatEventAsShow);
}

// async function addPriceAndSoldOutFromCheckoutPage(show) {
//   const { checkoutUrl } = show;
//   const priceData = await getPrice(checkoutUrl);
//   return {
//     ...show,
//     ...priceData,
//   };
// }

// function addCheckoutInfo(shows) {
//   return getInSequence(shows, addPriceAndSoldOutFromCheckoutPage);
// }

export function getEvents(ticketmasterId: string) {
  return fetchEvents(ticketmasterId).then(formatEvents);
  // .then(addCheckoutInfo);
}
