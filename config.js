'use strict';

const env = require('get-env')('local', 'docker');

module.exports = require(`./config/${env}`);
