// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
const { get } = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json") //1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.iss_position;
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

getIssPosition().then((result) => console.log(result));
