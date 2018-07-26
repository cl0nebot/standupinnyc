import Axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import * as moment from "moment-timezone";
import * as qs from "querystring";
const apiConfig: AxiosRequestConfig = {
  baseURL: "https://api.stubsites.com/api/v1/laughstub/",
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
    } else {
      return mergedResults;
    }
  });
};
const getVenues = () => getAll("venues?state=NY&city=New%20York", "venues");
const getComedians = () =>
  getAll("performers?categoryId=1", "performers").then(performers =>
    performers.map(formatPerformer)
  );

interface StubSitesQuery {
  itemsPerPage?: number;
  orderBy?: string;
  venueId?: number;
}

const getShowList = (query: StubSitesQuery = {}) => {
  query.itemsPerPage = query.itemsPerPage || 100;
  query.orderBy = query.orderBy || "date";

  return getAll(`showtimes?${qs.stringify(query)}`, "showtimes");
};

const getEvents = (query: StubSitesQuery = {}) => {
  query.itemsPerPage = query.itemsPerPage || 100;
  query.orderBy = query.orderBy || "date";

  return getAll(`events?${qs.stringify(query)}`, "events");
};

async function getStandupNy(): Promise<any> {
  return getShowsForVenue({ stubsiteId: 71 });
}

export {
  getAll,
  getVenues,
  getComedians,
  getShowList,
  getStandupNy,
  formatEvent,
  getShowsForVenue,
};

async function getShowsForVenue({ stubsiteId }) {
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

function formatEvent(eventData): any {
  const {
    id: stubsiteId,
    name,
    performers,
    show_times: [
      {
        datetime: startTimeString,
        checkout_url: checkoutUrl,
        ticket_types: [{ price }],
      },
    ],
  } = eventData;

  const startTime = datetimeStringToISO(startTimeString);
  const comedians = performers.map(formatPerformer);
  return {
    stubsiteId,
    price,
    startTime,
    name,
    checkoutUrl,
    comedians,
  };
}

function formatPerformer(performer: any): any {
  const { id: stubsiteId, name } = performer;

  const comedian = {
    stubsiteId,
    name,
    imageUrl: null,
  };

  if (performer.images.length > 0) {
    comedian.imageUrl = performer.images[0].url;
  }

  return comedian;
}
function datetimeStringToISO(datetimeString: string) {
  return moment.tz(datetimeString, "America/New_York").toDate();
}
