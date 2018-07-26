import { getPrice } from "./getPrice";
import { Cassette } from "../../../Cassette";

const cassette = new Cassette("ticketmasterCheckout");

fdescribe("#getEvents", () => {
  beforeEach(() => {
    return cassette.start();
  });
  afterEach(() => {
    return cassette.done();
  });

  it("the correct price", done => {
    const checkoutUrl =
      "https://www.ticketweb.com/event/moody-mccarthy-marc-theobald-eastville-comedy-club-tickets/8001335?REFERRAL_ID=tmfeed";
    return getPrice(checkoutUrl).then(({ price, soldOut }) => {
      expect(price).toEqual(10.99);
      expect(soldOut).toEqual(false);
      done();
    });
  });
});
