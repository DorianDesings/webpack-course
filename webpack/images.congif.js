module.exports = {
    test: /\.(jpe?g|png|svg|gif|webp)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[path][name]-[hash].[ext]',
            }
        },
        {
            loader: 'image-webpack-loader',
            options: {
                bypassOnDebug: true,
                mozjpeg: {
                    progressive: true,
                    quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: '65-90',
                    speed: 4
                },
                gifsicle: {
                    interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                    quality: 75
                }
            }
        }
    ]
}