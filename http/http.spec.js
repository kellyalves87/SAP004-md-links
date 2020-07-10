const http = require("../http/http.js");
const axios = require("axios");

jest.mock("axios");

it("should be return the http links", () => {

  const response = {
    "status": "200",
    "statusText": "Ok",
  }

  axios.get.mockImplementationOnce(()=> Promise.resolve(response));
  const httpLinks = http.getHttp("http://www.google.com");
  expect(httpLinks).resolves.toEqual(
    {
      "status": "200",
      "statusText": "Ok",
      "href": "http://www.google.com"
    },
  );
});
