// module.exports = () => {
//   // ...
// };

fs = require("fs");

console.log(process.argv);

const md = process.argv.slice(2);

console.log(md);

fs.readFile(md[0], "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
