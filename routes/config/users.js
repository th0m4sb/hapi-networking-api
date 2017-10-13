'use strict';

const Validations = require('../validations/users');
const Handlers = require('../handlers/users');

module.exports = {
  find: {
    validate: Validations.find,
    pre: [
      { method: 'users.find(query)', assign: 'users' }
    ],
    handler: Handlers.find
  }
};
