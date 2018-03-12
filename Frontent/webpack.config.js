var path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        filename: 'js/bundle.js',
        path: BUILD_DIR
    },
    module : {
        loaders : [
            {
                test    : /\.(js|jsx)?/,
                include : APP_DIR,
                loader  : 'babel-loader',
                query: {
                  presets: ['env', 'react'],
                  plugins: [
                      'react-html-attrs',
                      'transform-class-properties',
                      'transform-decorators-legacy',
                      'transform-object-rest-spread'
                    ]
                }
            },
            {
                test    : /\.scss?/,
                loader  : 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        //  new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),
        //new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;