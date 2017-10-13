'use strict';

const Path = require('path');
const Fs = require('fs');
const Each = require('lodash/each');

exports.register = (server, options, next) => {

  server.log(['info', 'routing'], 'Mounting routes...');

  let routes;

  Each(Fs.readdirSync(Path.resolve(__dirname)), (filename) => {

    const toExclude = /config|handlers|validations|index/;

    if (!toExclude.test(filename)) {
      routes = require(`./${filename}`);
      server.route(routes(server, options));
    }
  });

  next();
};

exports.register.attributes = {
  name: 'routes-plugin'
};
