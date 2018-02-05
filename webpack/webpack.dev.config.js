const webpack = require("webpack")
const path = require("path")

import { __dirname } from "path"

const parentDir = path.join(__dirname, '../');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true
  },
  entry: [
    path.join(parentDir, 'index.js')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.less$/,
      loaders: ["style-loader", "css-loader", "less-loader"]
    }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  }

}