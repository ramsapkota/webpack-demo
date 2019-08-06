const path = require("path");
module.exports = {
  mode: "development", //Explicitly set webpack to bundle without minification
  devtool: "none", //Explicitly tell webpack to export same code that is in them codefiles
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
