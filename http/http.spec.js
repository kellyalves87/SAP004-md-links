const http = require("../http/http.js");
const axios = require("axios");

jest.mock("axios");

describe("Test http functions", () => {
  it("should be return the http links", () => {
    const response = {
      status: "200",
      statusText: "Ok",
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    const httpLinks = http.getHttp("http://www.google.com");
    expect(httpLinks).resolves.toEqual({
      status: "200",
      statusText: "Ok",
      href: "http://www.google.com",
    });
  });

  it("should be an error when http fail", () => {
    const error = {
      code: "404"
    };

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    const httpLinks = http.getHttp("http://www.websitethatwillfail.com");
    expect(httpLinks).rejects.toEqual({
      href: "http://www.websitethatwillfail.com",
      status: "Fail",
      statusText: error.code
    });
  });
});
