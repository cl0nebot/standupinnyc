import axios from "axios";
import * as cheerio from "cheerio";

const getCheckoutPage = url => axios.get(url).then(response => response.data);

const parsePriceFromCheckoutPage = html => {
  const $ = cheerio.load(html);
  const priceString = $(".price")
    .first()
    .text();
  if (priceString.includes("$")) {
    const price = parseFloat(priceString.replace("$", ""));
    return {
      price,
      soldOut: false
    };
  }
  return {
    soldOut: true,
    price: undefined
  };
};

// Ticketmaster doesn't return prices in their api
// so we have to parse it from the checkout page
export function getPrice(url) {
  return getCheckoutPage(url).then(parsePriceFromCheckoutPage);
}
