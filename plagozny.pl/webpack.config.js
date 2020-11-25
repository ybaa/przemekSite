var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    output: {
        // path: 'src',
        path: '/run/media/ybaa/Data/plagozny/plagozny.pl/src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
