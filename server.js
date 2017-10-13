'use strict';

const Glue = require('glue');
const Config = require('./config');
const ServerConfig = Config.server.hapiNetworking;

ServerConfig.uri = (ServerConfig.tls ? 'https://' : 'http://') + `${ServerConfig.host}:${ServerConfig.port}`;

const manifest = {
  server: {
    app: Config
  },

  connections: [
    {
      host: ServerConfig.host,
      port: ServerConfig.port,
      labels: ['api'],
      routes: {
        security: true
      }
    }
  ],

  registrations: [
    {
      plugin: {
        register: 'good',
        options: Config.good
      }
    },
    {
      plugin: {
        register: './manifest'
      }
    }
  ]
};

if (Config.cache) {
  const caches = [];
  Object.keys(Config.cache).forEach((key) => {

    caches.push(Config.cache[key]);
  });

  manifest.server.cache = caches;
}

const opts = { relativeTo: __dirname };

Glue.compose(manifest, opts, (err, server) => {

  if (err) {
    throw err;
  }

  const bootMessage = `Server started with success! ${Config.product.name} is listening on ${ServerConfig.uri}. Environment: ${Config.env}`;

  server.initialize((err) => {

    if (err) {
      throw err;
    }

    server.start((err) => {

      if (err) {
        throw err;
      }

      server.log(['info'], bootMessage);
    });
  });
});
