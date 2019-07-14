const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    /**
     * Ponto de entrada
     */
    entry: './src/index.jsx',
    /**
     * Ponto de Saida
     */
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    /**
     * Config Servidor
     */
    devServer: {
        port: 8085,
        contentBase: './public',
    },
    /**
     * Config das minhas extensões e trocar o nome do node_modules para modules
     */
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [ 
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}