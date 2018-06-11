/**count remaining uncompleted items
 *
 * filters and reduces a count of how many todo's are left to complete
 *
 */
const store = require('../lib/store')
const { filter, reduce, compose } = require('ramda')

function remaining(todos) {
  function incomplete(obj) {
    return !obj.completed
  }
  function countRemaining(acc, obj) {
    return acc + 1
  }
  const result = compose(
    reduce(countRemaining, 0),
    filter(incomplete)
  )(todos)
  return result
}

module.exports = remaining
