'use strict'

var fs = require('fs')

function promiseFs(file) {
    return new Promise((resolve, reject) => {

        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

promiseFs('data.js')
.then( (data) => {
    console.log('data.js: ')
    console.log(data.toString())
    return promiseFs('data2.js') 
})
.then( (data2) => {
    console.log('data2.js: ')
    console.log(data2.toString())
})
.catch( (err) => {
    console.log('failure')
})
