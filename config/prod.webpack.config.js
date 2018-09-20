/* global require, module */

const _ = require('lodash');
const config = _.cloneDeep(require('./base.webpack.config'));

module.exports = _.merge({},
    config,
    require('./base.webpack.plugins.js')
);
