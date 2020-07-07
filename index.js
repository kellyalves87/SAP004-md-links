const service = require("./service/service.js");

const filePath = process.argv.slice(2)[0];
const params = {validate:process.argv.slice(3)[0], stats:process.argv.slice(4)[0]}
console.log(service.main(filePath, params));
