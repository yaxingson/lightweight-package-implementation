if(typeof process === 'undefined') {
	module.exports = require('./browser')
} else {
	module.exports = require('./node')
}
