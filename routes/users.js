'use strict';

const Config = require('./config/users');

module.exports = (server, options) => [
  {
    method: 'GET',
    path: '/users',
    config: Config.find
  }
];
