
'use strict'

// `...` == rest operator in function def
// `...` == spread operator in function call 

// rest
function add(...values) {
    const result = values.reduce( (x, v) => x + v, 0)
    return result
}

const result = add(2,3,4)
console.log(result)

const args = [10,20,30]

// spread
const result2 = add(...args)
console.log(result2)
