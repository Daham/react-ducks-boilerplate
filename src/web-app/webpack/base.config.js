/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 08:49:50
 * @modify date 2019-08-18 08:49:50
 * @desc Webpack base configuration.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src', 'index.js'),
    output: {
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            Framework: path.resolve(__dirname, '../src/internal/framework'),
            Actions: path.resolve(__dirname, '../src/internal/actions'),
            ActionTypes: path.resolve(__dirname, '../src/internal/actionTypes')
        },
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: "[name]__[local]__[hash:base64:5]"
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public', 'index.html')
        })
    ]
};