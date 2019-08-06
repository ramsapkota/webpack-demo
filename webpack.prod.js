var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "production", //Explicitly set webpack to bundle with minification
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  }
});
