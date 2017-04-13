const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        app: './source/index.ts',
    },
    devtool: 'source-map',
    output: {
        path: `${__dirname}/theme`,
        filename: './js/bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                loaders: ['to-string-loader', 'css-loader', 'less-loader'],
            },
            {test: /\.(png|gif|jpg)(\?.*$|$)/, loader: 'url-loader?limit=100000&name=images/[hash].[ext]'},
            {test: /\.(json)(\?.*$|$)/, loader: 'json-loader'},
            {test: /\.(html)(\?.*$|$)/, loader: 'html-loader'},
            // Font Definitions
            {test: /\.(svg)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'},
            {test: /\.(woff)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
            {test: /\.(woff2)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'},
            {test: /\.([ot]tf)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
            {test: /\.(eot)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'},
        ],
    },
    plugins: [
        new DefinePlugin({
            ENV: {production: isProduction},
        }),

        new ExtractTextPlugin('./css/styles.css'),

        new CleanWebpackPlugin([
            './www/wp-content/themes/restapi-angular'
        ], {
            verbose: true,
            dry: false,
            root: path.resolve(__dirname, './'),
            exclude: ['.gitignore'],
        }),

        new CopyWebpackPlugin([
            {
                from: 'theme',
                to: '../www/wp-content/themes/restapi-angular',
            },
        ]),

        // Workaround needed for angular 2 angular/angular#11580
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            './source'
        ),
    ],
};
