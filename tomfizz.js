/*
Print numbers 1 to 100, any number divisible by three is
replaced by the word fizz and any divisible by five by the
word buzz. Numbers divisible by both become fizz buzz.

const onehundred = Array(100)
  .fill()
  .map((value, index) => index + 1)
// TODO: FizzBuzz
HINT: use map to transform values to fizz, buzz, and fizzbuzz
*/
const map = require('../tools/map')
const compose = require('../tools/compose')
const partial = require('../tools/partial')

const the100 = Array(100)
  .fill()
  .map((value, index) => index + 1)

//const the100 = times(inc, 100)

const isDivisibleBy = partial(3, function(byNum, output, num) {
  if (num % byNum === 0) {
    return output
  }
  return num
})

const fizzbuzz = compose(
  isDivisibleBy(3, 'fizz'),
  isDivisibleBy(5, 'buzz'),
  isDivisibleBy(15, 'fizzbuzz')
)
const results = map(fizzbuzz, the100)

console.log(results)
