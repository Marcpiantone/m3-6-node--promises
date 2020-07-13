// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
const request = require("request");
require("dotenv").config();

console.log(process.env.OPENCAGE_API_KEY);

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return request(
    //`https://api.opencagedata.com/geocode/v1/json?q=${q}&key=${key}`
    `https://api.opencagedata.com/geocode/v1/json?${requestObj}`
  )
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.results;
    });
  // return something...
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));
