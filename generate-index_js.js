const fs = require('fs')

function writeContent(files) {
  let result = ''
  files.forEach(file => result += `export * from './${file}'\n`)
  return result
}

function main(indexFileName = 'index.js') {
  fs.readdir('./', (err, result) => {
    if (err) throw err

    const files = result
      .filter(filename =>
        filename.endsWith('.js') === true && filename !== indexFileName)
      .map(filename => filename.split('.js').shift())

    if (files.length) {
      console.log(files)

      fs.writeFile(indexFileName, writeContent(files), err => {
        if (err) throw err
        console.log('index.js was generated.')
      })
    }
    else {
      console.warn('no .js files are found')
    }
  })
}

main()
