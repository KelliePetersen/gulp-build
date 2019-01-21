const path = require('path');

module.exports = {
  entry: {
    index: "./app/src/js/index.js",
    vendor: "./app/src/js/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};