//
// 1) if the todos.json file exists then return "todos.json already exists and cannot be overwritten"
// 2) else it creates a todos.json file in the root project dir.
// 3)
//

const fs = require('fs')
//console.log(fs.existsSync("../todos.json"))

function init(x) {
  if (x[0] === '--force') {
    fs.writeFileSync('./todos.json', '[]')
    return 'successfully initialized todos.json'
  } else {
    if (fs.existsSync('./todos.json')) {
      return 'todos.json already exists and cannot be overwritten.  Use --force to delete and replace the file.'
    } else {
      fs.writeFileSync('./todos.json', '[]')
      return 'successfully initialized todos.json'
    }
  }
}

module.exports = init
