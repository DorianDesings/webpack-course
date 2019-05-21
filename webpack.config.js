const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const jsConfig = require('./webpack/js.config')
const pugConfig = require('./webpack/pug.config')
const cssSassConfig = require('./webpack/css-sass.config')
const imagesConfig = require('./webpack/images.congif')
const otherConfig = require('./webpack/other.config')

const rules = [jsConfig, pugConfig, cssSassConfig, imagesConfig, otherConfig]

module.exports = {
    devtool: 'source-map',
    module: { rules },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/views/index.pug',
            file: './index.html'
        })
    ]
}