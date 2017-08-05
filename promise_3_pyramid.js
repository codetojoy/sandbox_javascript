'use strict'

var fs = require('fs')

// dreaded pyramid/arrow pattern

fs.readFile('data.js', function(err, data) { 
    console.log("TRACER OK on data.js")
    
    fs.readFile('data2.js', function(err, data) {
        console.log("TRACER OK on data2.js")

        fs.readFile('data3.js', function(err, data) {
            console.log("TRACER OK on data3.js")
        })
    })
})

