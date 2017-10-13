'use strict';

const Boom = require('boom');

module.exports = (server, options) => [
  {
    name: 'users.find',
    method: find,
    options: {
      bind: server
    }
  }
];

const find = function find(query, next) {

  this.log(['info', 'request'], 'Find user request');

  try {

    return next(null, [
      {
        id : 1
      },
      {
        id: 2
      }
    ]);
  }
  catch (e) {

    return next(Boom.badImplementation());
  }
};
