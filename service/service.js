const file = require("../file/file.js");
const http = require("../http/http.js");
const stats = require("../stats/stats.js");

const main = (fileName, params) => {

    let returnFiles;
    file.getDataFile(fileName).then(files => {
        returnFiles = files;
    })
    .catch(error => console.log(error));
    
    let returnHttp = [];
    if(params.validate && !params.stats){
        returnFiles.map(file => {
            http.getHttp(file.href).then(response => {
                returnHttp.push({file:file.file, link:file.href, status:response.status, message:status.statusText, name:file.text})
            })
            .catch(error => console.log(error));
        })
        return returnHttp;
    }

    let returnStats = {};
    if(params.stats && !params.validate){
        returnStats = stats.stats(returnFiles);
        return returnStats;
    }

    //todo 


    return returnFiles
}

exports.main = main;
