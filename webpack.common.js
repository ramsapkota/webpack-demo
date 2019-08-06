var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Th ird injects css-javascript into dom
          "css-loader", // Second converts css into commonjs
          "sass-loader" //First converts sass into css
        ]
      }
    ]
  }
};