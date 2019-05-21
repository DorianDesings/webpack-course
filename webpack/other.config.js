module.exports = {
    test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[path][name]-[hash].[ext]',
            }
        }
    ]
}