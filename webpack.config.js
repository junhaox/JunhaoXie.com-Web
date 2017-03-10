var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './dist/app.min.js'
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}