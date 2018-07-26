import { readFileSync } from "fs";
import { getStandupNy, formatEvent } from "./fetchShows";

import { Cassette } from "../../../Cassette";

const cassette = new Cassette("sites");
jest.setTimeout(100000); // 1 second

describe("#getStandupNy", () => {
  beforeEach(() => {
    return cassette.start();
  });
  afterEach(() => {
    return cassette.done();
  });

  it("returns all 32 shows", done => {
    // const cassette = new Cassette("sites")
    // nockBack('get-standup-ny.json')
    //   .then(({nockDone, context}) => {
    // cassette.start()
    return getStandupNy().then((shows: any) => {
      expect(shows).toHaveLength(32);
      // nockDone()
      done();
    });
  });
});

describe("#formatEvent", () => {
  it("returns all necessary information about the performance", () => {
    const event = JSON.parse(
      readFileSync("./fixtures/stubsites-event.json").toString()
    );
    const show = formatEvent(event);

    expect(show.name).toEqual(
      "Stand Up NY Showcase ft. Dan Naturman, Godfrey + More!"
    );
    expect(show.comedians.length).toEqual(6);
  });
});
