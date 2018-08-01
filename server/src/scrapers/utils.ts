import * as cheerio from "cheerio";


export function parseJsonLd(string) {
  const $ = cheerio.load(string)
  const $jsonLd = $(`script[type="application/ld+json"]`).html()
  console.log($jsonLd)
}