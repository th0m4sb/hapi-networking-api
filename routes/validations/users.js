'use strict';

const Joi = require('joi');

module.exports = {
  find: {
    query: {
      limit: Joi.number().integer().min(0).default(20),
      offset: Joi.number().integer().min(0).default(0)
    }
  }
};
