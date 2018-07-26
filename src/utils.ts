import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}


export function getInSequence(array, asyncFunc) {
  return array.reduce(
    (previous, current) =>
      previous.then(accumulator =>
        asyncFunc(current).then(result => accumulator.concat(result))
      ),
    Promise.resolve([])
  );
}


export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
