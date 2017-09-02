const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const dirVars = require('./base/dir-vars.config.js')

module.exports = [
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({
    url: 'http://localhost:8080',
  }),
  new HtmlWebpackPlugin({
    title: 'React App',
    template: dirVars.templateHtml,
  }),
  new HtmlWebpackIncludeAssetsPlugin({
    assets: [
      'base.css',
    ],
    append: false,
  }),
]
