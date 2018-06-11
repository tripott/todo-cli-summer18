//
//Search the array of todos for a given search expression. one word
//
// returns all items with search word
//
//
//
const store = require('../lib/store')
const { pipe, map, join, filter } = require('ramda')

function search(arrWord) {
  const todos = store.get()

  const searchWord = arrWord[0]

  const hasWord = object => {
    return object['text'].includes(searchWord)
  }

  const filteredTodos = filter(hasWord, todos)

  const li = function(todo) {
    return `[${todo.completed === true ? 'X' : ' '}] - ${todo.id} ${todo.text}`
  }

  const mappedListItems = pipe(
    map(li),
    join('\n  ')
  )(filteredTodos)

  const result = `
  My To Do List
  ---------------------------------------
  ${mappedListItems}
  ---------------------------------------
  `
  return result
}

module.exports = search
