'use strict'

const fp = require('fastify-plugin');

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}
