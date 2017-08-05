
'use strict'

const numbers = [5,10]

let [x,y] = numbers

console.log(`x: ${x} , y: ${y}`)

// clever swap
// may not work in Node (compared to browser)
// [y, x] = [x, y]
// console.log(`x: ${x} , y: ${y}`)

let dog = {
    name: 'Brawley',
    birthYear: 1982
}

let {name, birthYear} = dog
console.log(`${name} born in ${birthYear}`)

