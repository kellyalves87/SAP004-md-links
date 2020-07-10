const stats = require("../stats/stats.js");

const array = [
  {
    href: "a"
  },
  {
    href: "b"
  },
  {
    href: "c"
  },
  {
    href: "a"
  },
]

it("should be return the unique and all links", () => {
  const result = stats.stats(array);
  expect(result).toBe("Unique: 3 All: 4");
});