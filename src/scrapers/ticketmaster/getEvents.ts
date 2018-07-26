import Axios from "axios";
import * as qs from "querystring";
import { getPrice } from "./getPrice";
import { find } from "lodash";
import { getInSequence } from "../../utils";


const baseUrl = "https://app.ticketmaster.com/discovery/v2/";

const axios = Axios.create({
  baseURL: baseUrl,
  params: {
    apikey: process.env.TICKETMASTER_API_KEY,
  },
});

function fetchEvents({ ticketmasterId }) {
  return axios
    .get("events", {
      params: {
        venueId: ticketmasterId,
        size: 100,
      },
    })
    .then(response => {
      console.log(response.data)
      return response
    })
    .then(response => {
      if(response.data.page.totalElements > 0) {
        return response.data._embedded.events
      }
      else {
        return []
      }
    })
}

function formatAttractionAsComedian({ id, name, images }) {
  const comedian = {
    ticketmasterId: id,
    name,
    imageUrl: undefined,
  };
  const image = find(images, { fallback: false });
  if (image) {
    comedian.imageUrl = image.url;
  }
  return comedian;
}

function formatAttractions(attractions = []) {
  return attractions.map(formatAttractionAsComedian);
}

function formatEventAsShow(event) {
  const {
    name,
    id,
    url,
    dates: { start: { dateTime } },
    _embedded: { attractions },
  } = event;
  const comedians = formatAttractions(attractions);

  return {
    name,
    ticketmasterId: id,
    checkoutUrl: url,
    startTime: dateTime,
    comedians,
  };
}

function formatEvents(events) {
  return events.map(formatEventAsShow);
}

async function addPriceAndSoldOutFromCheckoutPage(show) {
  const { checkoutUrl } = show;
  const priceData = await getPrice(checkoutUrl);
  return {
    ...show,
    ...priceData,
  };
}

function addCheckoutInfo(shows) {
  return getInSequence(shows, addPriceAndSoldOutFromCheckoutPage);
}

export function getEvents(ticketmasterId) {
  return fetchEvents({ ticketmasterId }).then(formatEvents);
  // .then(addCheckoutInfo);
}
