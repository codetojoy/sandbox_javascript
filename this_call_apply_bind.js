
'use strict'

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayName = function(greeting) {
    console.log(`${greeting} ${this.name}`)
}

// dynamic scope, not lexical scope
//
// in a function `this` is assigned:
//
// (a) by '.' e.g. p1.sayName()
// (b) by 'new' ??
// (c) by bind

const p1 = new Person('Mozart', 35)
p1.sayName('Normal hello')

const sayNameRef = p1.sayName
// this fails because `this` is `undefined`
// sayNameRef() 

// these only bind for the singular function call 
// call(ref, arg1, arg2, arg3)
// apply(ref, [arg1, arg2, arg3])

sayNameRef.call(p1, 'call hello')
sayNameRef.apply(p1, ['apply hello'])

// bind 
const boundSayName = sayNameRef.bind(p1, 'bind hello')
boundSayName()


