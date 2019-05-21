module.exports = {
    test: /\.pug$/,
    use: [
        {
            loader: 'pug-loader',
            options: { minimize: true }
        }
    ]
}