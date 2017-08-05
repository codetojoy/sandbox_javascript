'use strict'

var fs = require('fs')

console.log('TRACER cp 1')

function promiseFs(file) {
    console.log('TRACER cp 3')
    return new Promise((resolve, reject) => {
        console.log('TRACER cp 4')

        fs.readFile(file, (err, data) => {
            console.log('TRACER cp 6')
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

console.log('TRACER cp 2')

promiseFs('data.js').then( (data) => {
    console.log('TRACER cp 7')
    console.log('success')
    console.log(data.toString())
}).catch( (err) => {
    console.log('failure')
})

console.log('TRACER cp 5')

