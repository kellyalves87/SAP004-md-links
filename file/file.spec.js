const file = require("../file/file.js");
const fs = require("fs");

jest.mock("fs");

it("should be return the links", () => {
  fs.readFileSync.mockReturnValue("[Teste](http://www.google.com)");
  const data = file.getDataFile("Teste.md");
  expect(data).toStrictEqual([{
    "file": "Teste.md",
    "text": "Teste",
    "href": "http://www.google.com"
  }]);
});
