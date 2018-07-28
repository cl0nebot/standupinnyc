import Axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import * as moment from "moment-timezone";
import * as qs from "querystring";
import { ScrapedShow, ScrapedComedian } from "../interfaces";

const apiConfig: AxiosRequestConfig = {
  baseURL: "https://api.stubsites.com/api/v1/laughstub/"
};

const api: AxiosInstance = Axios.create(apiConfig);

const getJson = (path: string) =>
  api.get(path).then((response: AxiosResponse) => response.data.data);

// Get with pagination
const getAll = (pageUrl: string, responseKey: string, results = []) => {
  return getJson(pageUrl).then(data => {
    const nextPageUrl = data.pagination.next_page_url;
    const mergedResults = results.concat(data[responseKey]);
    if (nextPageUrl) {
      return getAll(nextPageUrl, responseKey, mergedResults);
    }
    return mergedResults;
  });
};

interface StubSitesQuery {
  itemsPerPage?: number;
  orderBy?: string;
  venueId?: number;
}

const getEvents = (query: StubSitesQuery = {}) => {
  query.itemsPerPage = query.itemsPerPage || 100;
  query.orderBy = query.orderBy || "date";

  return getAll(`events?${qs.stringify(query)}`, "events");
};

function formatPerformer(performer: any): ScrapedComedian {
  const { id: stubsiteId, name } = performer;

  const comedian: ScrapedComedian = {
    stubsiteId,
    name
  };

  if (performer.images.length > 0) {
    comedian.imageUrl = performer.images[0].url;
  }

  return comedian;
}

export function formatEvent(eventData): ScrapedShow {
  const {
    id: stubsiteId,
    name,
    performers,
    show_times: [
      {
        datetime: startTimeString,
        checkout_url: checkoutUrl,
        ticket_types: [{ price }]
      }
    ]
  } = eventData;

  const startTime = datetimeStringToISO(startTimeString);
  const comedians = performers.map(formatPerformer);
  return {
    stubsiteId,
    price,
    startTime,
    name,
    checkoutUrl,
    comedians
  };
}

function datetimeStringToISO(datetimeString: string) {
  return moment.tz(datetimeString, "America/New_York").toDate();
}

export async function getShowsForVenue(stubsiteId): Promise<ScrapedShow[]> {
  const showList = await getEvents({ venueId: stubsiteId });

  const eventIds = showList.map((item: any) => item.id);
  const shows = [];
  for (const id of eventIds) {
    const event = await getJson(`events/${id}`);
    const show = formatEvent(event);
    if (show.comedians.length > 0) {
      shows.push(show);
    }
  }
  return shows;
}
