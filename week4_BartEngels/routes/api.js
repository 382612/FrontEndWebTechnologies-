'use strict'

const fs = require('fs');
const app = require("fastify-cli/templates/app-ts/src/app");

module.exports = async function (fastify, opts) {
    fastify.get('/hoi', async function (request, reply) {
        return fastify.parser("Apoptosis")
    })
    fastify.get('/t', function (request, reply) {
        reply.send({ hello: 'hoi' })
    })
}
