// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage.geocode(requestObj).then((data) => {
    if (data.status.code == 200 && data.results.length > 0) {
      const place = data.results[0];
      return place.geometry;
    }
  });
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

getPositionFromAddress(
  "2322 rue Coupal, Montréal, QC H2K 1Y2"
).then((response) => console.log(response));

getPositionFromAddress(
  "49 grande Rue, 45150 Jargeau, France"
).then((response) => console.log(response));
