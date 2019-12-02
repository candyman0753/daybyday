const merge = require("webpack-merge");
const webpack = require("webpack");
const UglifyjsPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("./webpack.config");

module.exports = merge(config, {
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyjsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  mode: "production"
});
