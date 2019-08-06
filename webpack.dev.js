var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development", //Explicitly set webpack to bundle without minification
  //devtool: "none", //Explicitly tell webpack to export same code that is in them codefiles
  output: {
    filename: "[name].bundle.js",
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
});
