module.exports = {
    //javascript rules
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
}