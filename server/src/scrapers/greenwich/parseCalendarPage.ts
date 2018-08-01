import * as cheerio from "cheerio";

const selectors = {
  show: "div.upcoming-container-list"
}

function parseShow(showElement) {
  const $nameLink = showElement.find(".scheduled-name a")
  const $description = showElement.find(".scheduled-description")
  const name = $nameLink.text()
  const description = $description.text()
  const path = $nameLink.attr('href')
  return {
    name,
    description,
    path
  }
}
function parseComedian(elem) {
  const $nameLink = elem.find(".comedian-name a")
  const name = $nameLink.text()
  const path = $nameLink.attr('href')
  const imagePath = elem.find('img').attr('src')
  return {
    name,
    path,
    imagePath
  }
}


export function parseShowDetailsPage(html: string) {
  const $ = cheerio.load(html);
  // Tickets not on sale
  if($(".purchase-tickets-header").length == 0) {
    return false
  }
  const price = $('form[action="/checkout"] p.header').text().split(":")[1]
  const comedians = $(".comedian-image-container").map((i, elem) => parseComedian($(elem))).get()

  return {price, comedians}
}

export function parseCalendarPage(html: string) {
  const $ = cheerio.load(html);
  const shows = $("div.upcoming-container-list").map((i, elem) => parseShow($(elem))).get()
  return shows
}
