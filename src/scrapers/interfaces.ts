import {VenueWhereUniqueInput} from "../generated/prisma";


export interface ScrapedComedian {
  name: string;
  url?: string;
  imageUrl?: string;
  stubsiteId?: number;
}
export interface ScrapedShow {
  name: string;
  checkoutUrl: string;
  ticketmasterId?: string;
  stubsiteId?: number;
  cellarId?: number;
  startTime: Date;
  price?: number;
  comedians: ScrapedComedian[];
}

export interface Scraper {
  getShowsForVenue: (id: string | number) => Promise<ScrapedShow[]>;
  idField: keyof VenueWhereUniqueInput;
}