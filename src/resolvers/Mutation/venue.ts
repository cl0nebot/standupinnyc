import { forwardTo } from "prisma-binding";

export const venue = {
  createVenue: forwardTo("db")
};
