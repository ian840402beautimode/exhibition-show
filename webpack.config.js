const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  mode: 'development',
  devServer: {
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.pug$/,
        loader: ['html-loader', 'pug-html-loader?pretty=true'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: { 
          loader: 'url-loader',
          options: { 
            name: '[name].[ext]',
            publicPath: '../images/',
            outputPath: 'images/',
            limit: 1024
          }
        }
      },
    ]
  },
//   HTML & CSS 輸出文件
  plugins: [

    new HtmlWebpackPlugin({
        template: "./src/pug/index.pug",
        filename: "index.html",
        minify: {
            collapseWhitespace: false,
        },
    }),
    new ExtractTextPlugin({
        filename: "css/style.css",
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new CleanWebpackPlugin(),
  ]
};