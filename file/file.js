const fs = require("fs");

exports.getDataFile = (file) => {

  const fileReader = fs.readFileSync(file, "utf8");

  const regexLinks = /\[([^\]]*)\]\((http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?\)/gm;
  const array = fileReader.match(regexLinks);
  if(array === null) return;
  return array.map((el) => {
    const fileText = el.split("](");
    const text = fileText[0].replace("[", "");
    const href = fileText[1].replace(")", "");
    return { file, text, href };
  });
}
