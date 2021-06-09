'use strict'
const fs = require('fs');

// ./routes/root.js - adopted to demonstrate plugin usage
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    return fastify.parser("Apoptosis");

  })
  module.exports = routes;
}