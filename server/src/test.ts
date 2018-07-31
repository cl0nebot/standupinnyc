import "dotenv/config";

import { ScraperType } from "./generated/prisma";
import { scrapeSources } from "./importer";
scrapeSources(["COMEDYCELLAR", "STUBSITES"]);
