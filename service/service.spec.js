const service = require("../service/service.js");
const file = require("../file/file.js");
const stats = require("../stats/stats.js");

jest.mock("fs");
jest.mock("../file/file.js");
jest.mock("../stats/stats.js");

global.console = {
  log: jest.fn(),
};

describe("service function", () => {
  it("should be executed without params", () => {
    const fileArray = [
      {
        file: "Test.md",
        href: "http://www.google.com",
        text: "Testing functionalities",
      },
    ];

    file.getDataFile.mockReturnValue(fileArray);

    const returnLog =
      "/home/kelly/repo/SAP004-md-links/Test.md http://www.google.com Testing functionalities";

    service.main("Test.md", []);

    console.log(returnLog);
    expect(console.log).toHaveBeenCalled();
  });

  it("should be executed when pass validate and stats", () => {
    const fileArray = [
      {
        file: "Test.md",
        href: "http://www.google.com",
        text: "Testing functionalities",
      },
      {
        file: "Test.md",
        href: "http://www.mozilla.com",
        text: "Bringin the files",
      },
      {
        file: "Test.md",
        href: "http://hahaertrtrtr.com",
        text: "Fake URL"
      }
    ];

    const returnStats = "Unique: 3 All: 3";

    file.getDataFile.mockReturnValue(fileArray);
    stats.stats.mockReturnValue(returnStats);

    const returnLog = "Unique: 2 All: 2 Broken: 1";

    service.main("Test.md", ["--validate", "--stats"]);

    console.log(returnLog);
    expect(console.log).toHaveBeenCalled();
  });

  it("should be executed when pass validate", () => {
    const fileArray = [
      {
        file: "Test.md",
        href: "http://www.google.com",
        text: "Testing functionalities",
      },
      {
        file: "Test.md",
        href: "http://www.mozilla.com",
        text: "Bringin the files",
      },
    ];

    file.getDataFile.mockReturnValue(fileArray);

    const returnLog = [
      {
        file: "/home/kelly/repo/SAP004-md-links/Test.md",
        status: "200",
        statusText: "Ok",
        href: "http://www.google.com",
        text: "Test.md"
      },
      {
        file: "/home/kelly/repo/SAP004-md-links/Test.md",
        status: "200",
        statusText: "Ok",
        href: "http://www.mozzila.com",
        text: "Test.md"
      },
    ];

    service.main("Test.md", ["--validate"]);

    console.log(returnLog);
    expect(console.log).toHaveBeenCalled();
  });

  it("should return stats", () => {
    const fileArray = [
      {
        file: "Test.md",
        href: "http://www.google.com",
        text: "Testing functionalities",
      },
      {
        file: "Test.md",
        href: "http://www.mozilla.com",
        text: "Bringin the files",
      },
    ];

    const returnStats = "Unique: 2 All: 2";

    file.getDataFile.mockReturnValue(fileArray);
    stats.stats.mockReturnValue(returnStats);
    
    service.main("Test.md", ["--stats"]);

    console.log(returnStats);
    expect(console.log).toHaveBeenCalled();
  });
});
