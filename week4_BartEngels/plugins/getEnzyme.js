const fp = require('fastify-plugin');
const fs = require('fs');
const path = require('path');
const util = require('util');

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

async function readRestrictionEnzyme() {
    let data = await readFile(path.join(__dirname, 'data', "restriction_enzymes_table-rebase.txt"), 'utf8');
    return data
        .split('\n')
        .map(row => row.split(/\s+/))
        .slice(2); // Skip first 23 lines (header)
}

function parseVariants(data) {

    return data
        .map(enzyme => {
            if (enzyme.length === 3)
                return {
                    name: enzyme[0],
                    synoniem: enzyme[1],
                    site: [enzyme[2]]
                }
            else
                return {
                name: enzyme[0],
                synoniem: " ",
                site: [enzyme[1]]
            }
        })
}

const enzymeContainer = {
    enzymes: new Map(),
    getEnzyme: function(enzyme) {
        if (this.enzymes.has(enzyme))
            return this.enzymes.get(enzyme);
    },
    addEnzyme: function(enzyme) {
        // ... code for adding an enzyme to the Map
    }
}

module.exports = fp(async function (fastify, opts) {
    fastify.decorate('parser', getPathway)

})
async function main() {
    let vcfData = await readRestrictionEnzyme();
    console.log(`> A total of ${vcfData.length} variants have been read\n`);
    console.log(parseVariants(vcfData))};


main();
