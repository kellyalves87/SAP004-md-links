const axios = require("axios");

const getHttp = (href) => {
    return new Promise((resolved, rejected) => {
        axios.get(href)
        .then((success) => {
            resolved({ href, status: success.status, statusText: success.statusText })
        })
        .catch(error => {
            rejected(error)
        })    
    });
}

exports.getHttp = getHttp;
