
'use strict'

class Person {
    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log(`hello from ${this.name}`)
    }
}

const p1 = new Person('Mozart')
p1.sayName()

