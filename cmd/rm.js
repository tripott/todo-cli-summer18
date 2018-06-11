const store = require('../lib/store')
const { reject } = require('ramda')
const ls = require('./ls')

function rm(id) {
  function removeID(todo) {
    return todo.id === Number(id)
  }

  const todos = store.get()

  store.set(reject(removeID, todos))
  return ls()
}

module.exports = rm
