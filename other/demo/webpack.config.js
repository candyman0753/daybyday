const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        // use: ExtractTextWebpackPlugin.extract({
        //   use: "css-loader",
        //   fallback: "style-loader"
        // })
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    // new ExtractTextWebpackPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: "wepack demo"
    })
  ]
};
