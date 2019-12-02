const merge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.config");

module.exports = merge(config, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "/dist",
    // compress: true,
    hot: true
    // hotOnly: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: "development"
});
