const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const jsConfig = require('./webpack-config/js.config')
const pugConfig = require('./webpack-config/pug.config')
const cssSassConfig = require('./webpack-config/css-sass.config')
const imagesConfig = require('./webpack-config/images.congif')
const jsonConfig = require('./webpack-config/json.config')
const otherConfig = require('./webpack-config/other.config')

const rules = [jsConfig, pugConfig.rules, cssSassConfig, imagesConfig, jsonConfig, otherConfig]

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: { rules },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin()
    ].concat(pugConfig.multilpePages)
}

