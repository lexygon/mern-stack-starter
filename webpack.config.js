'use strict';
const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const ENV = require('./helpers/env');

// noinspection SpellCheckingInspection
module.exports = {
    mode: ENV,
    devtool: 'eval',
    entry: `${__dirname}/src/main.jsx`,
    output: {
        filename: 'bundle-[hash].js',
        path: `${__dirname}/build/client`,
        publicPath: '/',
    },
    plugins: [
        new HTMLPlugin(),
        new ExtractPlugin('bundle-[hash].css'),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
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
                    },
                ],
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 244000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};