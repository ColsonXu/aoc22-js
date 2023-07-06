const fs = require('fs')
const readline = require('readline')

const file = readline.createInterface({
    input: fs.createReadStream('./input')
})

function calcScore(move, outcome) {
    let score = 0
    if (outcome === 'X') {
        score += 0
    } else if (outcome === 'Y') {
        score += 3
    } else {
        score += 6
    }
    
    if (move === 'A') {
        score += 1
    } else if (move === 'B') {
        score += 2
    } else {
        score += 3
    }
    return score
}

function move(o, outcome) {
    if (o === 'A') {
        if (outcome === 'X') {
            return 'C'
        } else if (outcome === 'Y') {
            return 'A'
        } else if (outcome === 'Z') {
            return 'B'
        }
    } else if (o === 'B') {
        if (outcome === 'X') {
            return 'A'
        } else if (outcome === 'Y') {
            return 'B'
        } else if (outcome === 'Z') {
            return 'C'
        }
    } else if (o === 'C') {
        if (outcome === 'X') {
            return 'B'
        } else if (outcome === 'Y') {
            return 'C'
        } else if (outcome === 'Z') {
            return 'A'
        }
    }
}

let total = 0
file.on('line', (line) => {
    let input = line.split(' ')
    let m = move(input[0], input[1])
    total += calcScore(m, input[1])
})

file.on('close', () => {
    console.log(total)
})
