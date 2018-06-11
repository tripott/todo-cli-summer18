const store = require('../lib/store')
const filter = require('ramda')
const ls = require('./ls')

function isID(obj) {
  return obj.id !== 4
}
function remove(arr) {
  return filter(isID, arr)
}
return remove(ls)

module.exports = remove
