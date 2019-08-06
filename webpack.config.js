const path = require("path");
module.exports = {
  mode: "development", //Explicitly set webpack to bundle without minification
  //devtool: "none", //Explicitly tell webpack to export same code that is in them codefiles
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Third injects css-javascript into dom
          "css-loader", // Second converts css into commonjs
          "sass-loader" //First converts sass into css
        ]
      }
    ]
  }
};
