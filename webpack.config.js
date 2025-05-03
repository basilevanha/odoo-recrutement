// filepath: /Users/basile/Sites/Basile Vanhaverbeke/odoo-recrutement/webpack.config.js
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static', to: path.output } // Copy everything from 'static' to 'dist'
            ]
        })
    ]
};