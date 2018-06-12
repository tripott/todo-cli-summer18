const store = require('../lib/store')
const { pipe, map, join } = require('ramda')

function ls() {
  /*
    1) DONE ! get() the todo list from the store
    2) draw a header
    3) map over the list and produce a list item for each object in the array
    4)    create a li function for the map.  take in an object and return a string list ite
    5) draw a footer
    6)  return the result as a string from the function.

    My To Do List
     ---------------------------------------
     [X] - 1 cut grass
     [X] - 2 make dinner
     [ ] - 3 eat dinner
     ---------------------------------------
  */
  const todos = store.get()
  const remaining = require('./remaining')
  const li = function(todo) {
    return `[${todo.completed === true ? 'X' : ' '}] - ${todo.id} ${todo.text}`
  }

  const mappedListItems = pipe(
    map(li),
    join('\n  ')
  )(todos)

  const result = `
  My To Do List
  ---------------------------------------
  ${mappedListItems}
  ---------------------------------------
  remaining : ${remaining(todos)}
  `
  return result
}

module.exports = ls
