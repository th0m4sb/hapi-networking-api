'use strict';

module.exports = {
  find: (request, reply) => reply(request.pre.users)
};
