const webpack = require("webpack");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// webpackBaseConfig.plugins.pop();
module.exports = merge(webpackBaseConfig, {
  mode: "production",
  output: {
    publicPath: "./dist/",
    filename: "[name].[hash].js"
  },
  plugins: [
    // 提取css并添加hash
    new ExtractTextPlugin({
      filename: "[name].[hash].css",
      allChunks: true
    }),
    // 压缩js
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    }),
    // 提取模板保存到html
    new HtmlwebpackPlugin({
      filename: "../index_pro.html",
      template: "./index.ejs",
      inject: false
    })
  ]
});
