const axios = require("axios");

const getHttp = (href) => {
  return axios
    .get(href)
    .then((success) => ({
      href,
      status: success.status,
      statusText: success.statusText,
    }))
    .catch((error) => ({ href, status: "Fail", statusText: error.code }));
};

exports.getHttp = getHttp;
