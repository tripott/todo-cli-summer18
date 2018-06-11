const { head } = require('ramda')
const remove = require('./cmd/remove')
const ls = require('./cmd/ls')

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
      return 'you asked for the init cmd'
    case 'add':
      return add(everythingelse)
    case 'remove':
      return remove()
    case 'ls':
      return ls()
    default:
      return `${cmd} is not supported`
  }
}
