const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')

//Multiple pages
const templatePath = path.resolve(__dirname, '../src/views/pages/')

const pages = fs
    .readdirSync(path.resolve(__dirname, '../src/views/pages'))
    .filter(fileName => fileName.endsWith('.pug'))


const multilpePages = pages.map(page => {
    page = page.substring(0, page.lastIndexOf('.'))
    return new HtmlWebpackPlugin({
        template: `${templatePath}/${page}.pug`,
        filename: `${page}.html`
    })
})

module.exports = {
    rules: {
        test: /\.pug$/,

        use: [
            {
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
            },
            {
                loader: 'pug-html-loader'
            }
        ]
    },
    multilpePages
}
