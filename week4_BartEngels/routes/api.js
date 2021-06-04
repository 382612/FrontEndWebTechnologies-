'use strict'

const fs = require('fs');

module.exports = async function (fastify, opts) {
    fastify.get('/u', async function (request, reply) {
        return 'this is an example'
    })
    fastify.get('/t', function (request, reply) {
        reply.send({ hello: 'hoi' })
    })

    fastify.get('/b', function (request, reply) {
        fs.readFile('', function(err, data) {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send(data)
        })
    })
}
