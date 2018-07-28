import { Prisma } from "./generated/prisma";

export interface Context {
  db: Prisma;
  request: any;
}

export function getInSequence(array: any[], asyncFunc: any): Promise<any[]> {
  return array.reduce(
    (previous, current) =>
      previous.then((accumulator: any) =>
        asyncFunc(current).then((result: any) => accumulator.concat(result))
      ),
    Promise.resolve([])
  );
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
