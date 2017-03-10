var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        inline: true,
        port: 8080
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