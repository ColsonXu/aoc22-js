const fs = require('fs')
const readline = require('readline')

const file = readline.createInterface({
    input: fs.createReadStream('./input'),
})

let max = 0
let total = 0
file.on('line', (line) => {
    if (line === '') {
        max = Math.max(max, total)
        total = 0
    } else {
        total += parseInt(line, 10)
    }
})

file.on('close', () => {
    console.log(max)
})
