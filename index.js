#!/usr/bin/env node

const service = require("./service/service.js");

const filePath = process.argv.slice(2)[0];
service.main(filePath, process.argv);
