import { map } from "lodash";
import { slugify, Context } from "../../utils";
import { findOrCreateShows } from "../../formatComedians";

export const show = {
  async findOrCreateShows(parent, { shows }, ctx: Context, info) {
    //  returnns an array of {id: } objects containing a show Id
    const showIdResponse = await findOrCreateShows(shows);
    const showIds = map(showIdResponse, "id");
    return ctx.db.query.shows({ where: { id_in: showIds } }, info);
  },
};
