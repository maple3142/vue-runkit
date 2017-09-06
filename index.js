if(window)throw 'use dist/vue-runkit.js instead'
var comp = require('./src/index.js')
comp = comp.default || comp
module.exports = comp