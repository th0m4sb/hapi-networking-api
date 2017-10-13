'use strict';

let prefix = require('../config').apiPrefix;

exports.register = (server, options, next) => {

  prefix = prefix === '' ? undefined : prefix;

  server.register([
    {
      register: require('../routes'),
      routes: { prefix }
    }
  ], (err) => {

    if (err) {
      return next(err);
    }
  });

  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
