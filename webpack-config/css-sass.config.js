const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
module.exports = {
    test: /\.(css|scss)$/,
    use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                autoprefixer: {
                    browser: ['last 3 versions']
                },
                sourceMap: true,
                plugins: () => [autoprefixer]
            }
        },
        'resolve-url-loader',
        {
            loader: 'sass-loader',
            options: {
                outputStyle: 'compact',
                sourceMap: true
            }
        }
    ]
}