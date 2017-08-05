'use strict'

var fs = require('fs')

fs.readFile('data.js', function(err, data) { 
    console.log("TRACER 3")
    console.log(data.toString())
})

fs.readFile('data.js', function(err, data) { 
    console.log("TRACER 4")
    console.log(data.toString())
})

// execution context always completes before async callback
function foo() { console.log("TRACER 1") }
function bar() { 
    foo() 
    console.log("TRACER 2")
}

bar()
