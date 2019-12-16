/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 08:51:26
 * @modify date 2019-08-18 08:51:26
 * @desc Webpack production configuration.
 */

const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    devtool: false
});