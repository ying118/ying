const glob = require("glob");
const entryHtml = glob.sync("src/pages/*/*.html");
const page = {}
entryHtml.forEach(filePath => {
  const fileName = filePath.substring(filePath.lastIndexOf("/") + 1, filePath.lastIndexOf("."));
  page[fileName] = {
    entry: `src/pages/${fileName}/${fileName}.js`,
    template: `src/pages/${fileName}/${fileName}.html`,
    filename: `${fileName}.html`
  }
});
module.exports = {
  pages: page
};
