const store = require('../lib/store')
const { filter } = require('ramda')
const ls = require('./ls')
const list = store.get()
function remove(x) {
  function isID(obj) {
    return obj.id != x
  }
  return filter(isID, list)
}

module.exports = remove
