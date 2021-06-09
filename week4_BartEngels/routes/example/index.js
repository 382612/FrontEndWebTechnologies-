'use strict'

module.exports = async function (fastify, opts, next) {
  fastify.get('/index', async function (request, reply) {
    return 'this is an example'
  })
}
