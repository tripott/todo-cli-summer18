const { head } = require('ramda')
const remove = require('./cmd/remove')
const ls = require('./cmd/ls')
const add = require('./cmd/add')
const init = require('./cmd/init')
const search = require('./cmd/search')
const rm = require('./cmd/rm')
const check = require('./cmd/check')

//console.log('process.argv', process.argv)

const [execNodePath, jsPath, cmd, ...everythingelse] = process.argv

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`)
// })

console.log(handleCmd(cmd))

function handleCmd(cmd) {
  // 'add', 'init', 'rm'
  switch (cmd) {
    case 'init':
      return init(everythingelse)
    case 'add':
      return add(everythingelse)
    case 'rm':
      return rm(everythingelse[0])
    case 'search':
      return search(everythingelse)
    case 'ls':
      return ls()
    case 'check':
      return check(everythingelse)
    default:
      return `${cmd} is not supported`
  }
}
