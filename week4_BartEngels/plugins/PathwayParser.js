const fp = require('fastify-plugin');

function getPathway(pname) {
    // ...
    return {id: 'hsa04210', pathway: 'Apoptosis', ngenes: '112'}
}
module.exports = fp(async function (fastify, opts) {
    fastify.decorate('parser', getPathway)
})