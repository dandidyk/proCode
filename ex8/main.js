const needle = require('needle');
const fs = require('fs-extra')
const file = './file.json'

needle('get','https://swapi.co/api/people/')
    .then((response) => {
        const res = JSON.stringify(response.body.results)

        console.log(response.body);
        return fs.outputFile(file, res)
    })
    .then(() => fs.readFile(file, 'utf8'))
    .then(data => {
      console.log(data) // => hello!
    }) 


