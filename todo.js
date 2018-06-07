const { head } = require('ramda')

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
      return 'you asked for the add cmd'
    case 'rm':
      return 'you asked for the rm cmd'
    default:
      return `${cmd} is not supported`
  }
}
