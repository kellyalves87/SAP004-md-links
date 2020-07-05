const fs = require("fs");
const axios = require("axios");

mdLinks = (file, validate, stats) => {
  return new Promise((resolved, rejected) => {    
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        rejected(err.message);
      } else {
        const regexLinks = (/\[([^\]]*)\]\((http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?\)/gm);
        const array = data.match(regexLinks);
        const checkLink = array.map((el) => {
          const fileText = el.split('](');
          const text = fileText[0].replace("[", "");
          const href = fileText[1].replace(")", "");
          return { file, text, href }
        });

        if(validate){
          checkLink.map(obj => {
            axios.get(obj.href)
              .then(response => {
                console.log(file + " " + obj.href + " " + response.status + " " + response.statusText + " " + obj.text);
              })
              .catch(error => {
                console.log(obj.href + " - status: " + error.response.status + " - statusText: " + error.response.statusText);
              })
          });
        }

        if(stats){
          const links = checkLink.map((item) => item.href);
          const set = new Set(links);
          //console.log(`Unique: ${set.size} \n All: ${links.length}`);
          resolved(`\nUnique: ${set.size} \n All: ${links.length}`);
        }

        resolved(checkLink);
      }      
    });
  });
}

mdLinks(process.argv.slice(2)[0], process.argv.slice(2)[1], process.argv.slice(2)[2]).then((success) => console.log(success)).catch((error) => console.log(error));
