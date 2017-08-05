
'use strict'

function Person(name) {
    this.name = name
}

// => functions use lexical scoping for `this`

Person.prototype.sayNameDelay = function(greeting) {
    setTimeout( () => {
        console.log(`Hello ${this.name}`)
    }, 1000);
}

const p1 = new Person('Chopin')
p1.sayNameDelay()


