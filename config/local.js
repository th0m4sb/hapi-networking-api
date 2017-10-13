'use strict';

module.exports = {
  env: 'local',

  product: {
    name: 'networking-app'
  },

  server: {
    hapiNetworking: {
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      tls: false
    }
  },

  good: {
    /*ops: {
      interval: 1000
    },*/
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*'
        }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
  },

  apiPrefix: '/api/v1'
};
