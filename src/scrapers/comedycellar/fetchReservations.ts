import fetch from "node-fetch";

// Comes back from Comedy Centrals reservations api,
// theey don't really use status codes
// this includes a lot of data on ticket sales not available on the site
// expects dates in yyyy-mm-dd string format
export default function fetchReservations(dateString: string) {
  const data = {date: dateString, init: false, endpoint: "getShowtimes"}

  const url = "http://www.comedycellar.com/v3/reservation/api/";
  return fetch("https://www.comedycellar.com/v3/reservation/api/", {
    "credentials":"include",
    "headers":{},
    "body": JSON.stringify(data),
    "method":"POST",
    "mode":"cors"
  }).then(resp => resp.json())
    .then((response: any) => {
    console.log(response)
    if (!response.success) {
      throw new Error("looking up reservation data failed");
    }
    // fs.writeFileSync("./fixtures/comedy-cellar-reservation.json", JSON.stringify(response.data))
    return response.showtimes.map(show => {
      const soldOut = show.max - show.guestsCount <= 0;
      return {
        timestamp: show.timestamp,
        soldOut,
        price: show.cover,
        name: show.description,
      };
    });
  });
}
