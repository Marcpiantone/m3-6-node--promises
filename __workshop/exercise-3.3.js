// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat}, ${lng}`,
  };
  return opencage.geocode(requestObj).then((data) => {
    if (data.status.code == 200 && data.results.length > 0) {
      const place = data.results[0];
      return place.formatted;
    }
  });
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);
