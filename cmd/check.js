const store = require('../lib/store')
const { map } = require('ramda')
const ls = require('./ls.js')

function check(arrId) {
  const todos = store.get()
  const toCheckId = arrId[0]

  function checkId(todo) {
    if (todo.id === Number(toCheckId)) {
      todo.completed = true
      return todo
    } else return todo
  }

  const checkedTodos = map(checkId, todos)

  store.set(checkedTodos)
  return `successfully checked #${toCheckId}`
}

module.exports = check
