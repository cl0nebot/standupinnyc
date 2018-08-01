
import Axios from "axios";
import {parseCalendarPage, parseShowDetailsPage} from "./parseCalendarPage"
import {parseJsonLd} from "../utils"

const BASE_URL = "https://greenwichvillagecomedyclub.com"

const axios = Axios.create({
  baseURL: BASE_URL
});


const BASE_CALENDAR_URL = "/calendar/"
const formatMonth = (month) => month >= 10 ? `${month}` : `0${month}`
// Get this month and next month
//
const getDateStrings = (date) => {
  const month = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()
  return [`${year}-${formatMonth(month)}`, `${year}-${formatMonth(month +1)}`]
}

const get = (url) => {
  console.log("getting", url)
  return axios.get(url).then(res => res.data)
}
async function getCalendarPages() {
  const urls = getDateStrings(new Date()).map(monthString => `${BASE_CALENDAR_URL}${monthString}`)
  return Promise.all(urls.map(url => get(url).then(parseCalendarPage)))
}

async function getShows() {
  const [firstPage, secondPage] = await getCalendarPages()
  const pageData = firstPage.concat(secondPage)
  console.log(pageData)
  const showData = await Promise.all(pageData.map(pageData => get(pageData.path).then(parseShowDetailsPage)))
  return showData
}

export default function() {
  return get("/calendar/").then(parseJsonLd)
}
// export default getShows