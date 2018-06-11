const store = require('../lib/store')
const filter = require('ramda')
const ls = require('./ls')

function remove(num) {
  function isID(obj) {
    return obj.id !== num
  }
  return filter(isID(5), ls)
}

module.exports = remove
