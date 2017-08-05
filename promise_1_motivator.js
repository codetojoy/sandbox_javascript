'use strict'

var fs = require('fs')

fs.readFile('data.js', function(err, data) { 
    console.log("TRACER 3")
    console.log(data.toString())
})

// execution context always completes before async callback
console.log("TRACER 1")
console.log("TRACER 2")
