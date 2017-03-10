var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8080,
        stats: 'errors-only'
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