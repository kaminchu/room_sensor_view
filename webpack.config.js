var webpack = require('webpack');

const PRODUCTION = process.env.NODE_ENV === 'production';
module.exports = {
    entry: {
        client: __dirname + "/src/index.js",
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + "/public",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    devtool: 'source-map',
};