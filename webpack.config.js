var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development", //Explicitly set webpack to bundle without minification
  //devtool: "none", //Explicitly tell webpack to export same code that is in them codefiles
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
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
