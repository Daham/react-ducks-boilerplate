/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 08:50:27
 * @modify date 2019-08-18 08:50:27
 * @desc Webpack development congiguration including the dev server configurations.
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true,
        port: 3000
    }
});