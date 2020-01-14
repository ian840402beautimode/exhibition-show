const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const fs = require('fs');
let PugFiles = [];

fs.readdirSync('./src/pug').forEach(function(elementName) {
    let array = elementName.split(".");
    // Check that is a file or folder
    if (array.length == 2) {
        PugFiles.push(
            new HtmlWebpackPlugin({
                template: `./src/pug/${ elementName }`,
                filename: `./${ array[0]}.html`,
                minify: {
                    collapseWhitespace: false,
                },
            })
        )
    }
});

module.exports = {
  entry:
    {
        main: [
            './src/js/main.js',
            './src/scss/style.scss'
        ]
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // publicPath: '../../../../',            // 打包正式環境時使用
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
  module: {
    rules: [
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                publicPath: "../",
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
                    name: "[path][name].[ext]",
                    context: "src",     // 處理圖片巢狀資料夾結構
                    limit: 1024
                }
            }
        },
        {
            test: /\.(woff|woff2|ttc|ttf|otf)$/i,
            use: {
                loader: 'url-loader',
                options: { 
                    name: "fonts/[name].[ext]",
                    limit: 1024
                }
            }
        },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
        "verbose": true,
        "cleanOnceBeforeBuildPatterns": [
            '**/*',
            '!.htaccess',       // set exclude items
            '!index.php',
            '!mix-manifest.json',
            '!robots.txt',
            '!web.config',
            '!favicon.ico',
            '!plugins/**'
        ],
    }),
    new ExtractTextPlugin({
        filename: "css/style.css",
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
    }),
    new LiveReloadPlugin(),
  ].concat(PugFiles),
};