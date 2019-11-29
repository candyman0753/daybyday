const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
  mode: "development",
  entry: {
    main: "./main"
  },
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpg|png|woff|svg|eot|tff)\??.*$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: "css-loader",
              fallback: "vue-style-loader"
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("main.css"), new VueLoaderPlugin()]
};

module.exports = config;
