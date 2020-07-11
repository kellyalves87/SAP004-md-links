const file = require("../file/file.js");
const path = require("path");
const { getHttp } = require("../http/http.js");
const stats = require("../stats/stats.js");
const chalk = require("chalk");

const main = (fileName, params) => {
  const fileArr = file.getDataFile(fileName);

  if (params.includes("--validate") && params.includes("--stats")) {
    validateAndStats(fileArr);
    return;
  }

  if (params.includes("--validate")) {
    validate(fileArr);
    return;
  }

  if (params.includes("--stats")) {
    console.log(chalk.green(stats.stats(fileArr)));
    return;
  }

  fileArr.forEach((file) => {
    console.log(chalk.green(path.resolve(file.file) + " " + file.href + " " + file.text));
  });
};

const validateAndStats = (fileArr) => {
  let objStatus = stats.stats(fileArr);
  let broken = 0;

  const request = Promise.all(fileArr.map((file) => getHttp(file.href)));

  request.then((links) => {
    links.forEach((link) => {
      if (link.status === "Fail") {
        broken = broken + 1;
      }
    });

    objStatus += " Broken: " + broken;

    console.log(chalk.green(objStatus));
  });
};

const validate = (fileArr) => {
  fileArr.map((file) => {
    getHttp(file.href)
      .then((response) => {
        console.log(chalk.green(
          path.resolve(file.file),
          file.href,
          response.statusText,
          response.status,
          file.text
        ));
      })
      .catch((error) => {
        console.log(chalk.red(
          path.resolve(file.file),
          file.href,
          error.statusText,
          error.status
        ));
      });
  });
};

exports.main = main;
