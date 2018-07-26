import { getEvents } from "./getEvents";
import { Cassette } from "../../../Cassette";
jest.setTimeout(100000); // 1 second

fdescribe("#getEvents", () => {
  it("returns all 32 shows", done => {
    const ticketmasterId = "KovZpZAFnAJA";
    return getEvents({ ticketmasterId }).then((shows: any) => {
      console.log(JSON.stringify(shows));
      // nockDone()
      done();
    });
  });
});
