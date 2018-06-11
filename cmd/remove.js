const store = require('../lib/store')
const { filter } = require('ramda')
const ls = require('./ls')
function remove() {
  return filter(isID, ls)
}
function isID(obj) {
  return obj.id == 4
}

module.exports = remove
