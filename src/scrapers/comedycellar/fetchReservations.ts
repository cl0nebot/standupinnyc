import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Comes back from Comedy Centrals reservations api,
// theey don't really use status codes
// this includes a lot of data on ticket sales not available on the site
// expects dates in yyyy-mm-dd string format
export default function fetchReservations(dateString: string) {
  const url = "http://www.comedycellar.com/v3/reservation/api/";
  const config: AxiosRequestConfig = {
    method: "post",
    url: url,
    withCredentials: true,
    data: {
      date: dateString,
      init: false,
      endpoint: "getShowtimes",
    },
  };

  return axios(config).then((response: AxiosResponse) => {
    if (!response.data.success) {
      throw new Error("looking up reservation data failed");
    }
    // fs.writeFileSync("./fixtures/comedy-cellar-reservation.json", JSON.stringify(response.data))
    return response.data.showtimes.map(show => {
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
