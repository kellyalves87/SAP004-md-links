const fs = require("fs");

mdLinks = (file) => {
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
        resolved(checkLink);
      }      
    });
  });
}

mdLinks(process.argv.slice(2)[0]).then((success) => console.log(success)).catch((error) => console.log(error));
