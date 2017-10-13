'use strict';

module.exports = (server, options) => [
  {
    method: 'GET',
    path: '/health',
    config: {
      handler: function (request, reply) {

        reply('Server is UP and Running');
      }
    }
  }
];
