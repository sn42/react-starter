const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};

// TODO Handle polyfills: @babel/polyfill is deprecated.
