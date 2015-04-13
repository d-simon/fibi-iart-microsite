/*
** webpack.js
*************
** Webpack Config file.
*/


//** Options **//
var paths = require('./paths.js');


//** Dependencies **//
var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


//** Main **//
//


//** Export **//
module.exports = {
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    output: {
        publicPath: 'js/',
        devtoolModuleFilenameTemplate: "source-webpack:///[resource-path]"
    },
    plugins: [],
    devtool: '#source-map',
    resolve: {
        root: [
            path.resolve(paths.frontend, 'node_modules'),
            path.resolve(paths.frontend, 'bower_components'),
            path.resolve(paths.src, 'js/app')
        ]
    }
}