// Classes

class Person {
    constructor (name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxsis

let person = new Person ('Jose', 19, 'Che')
let person2 = new Person ('David', 18, 'Juan' )

console.log (person)
console.log (person2)

// Valores por defecto

class defaultPerson {
    constructor (name = "Nombre por defecto", age = 0, alias = 'Sin alias') {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new defaultPerson('Chee', 22)

console.log (person3)

// Acceso a propiedades

console.log (person3.alias)

person3.alias = "Juanito"
console.log (person3['alias'])

// Funciones en clases

class PersonWithMethod {
    constructor (name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    
    walk () {
        console.log ("la persona camina")
    }
}

let person4 = new PersonWithMethod ('Jose', 30 , "David")
person4.walk()

// Propiedades privadas

class privatePerson {
    #bank
    constructor (name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay (){
        this.#bank
    }
}

let person5 = new privatePerson ('Jose', 30 , "David", "Che123456789")
console.log (person5.bank) // no podemos acceder

// Getters y Setters
class getSetPerson {
    #name
    #age
    #alias
    #bank
    constructor (name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name () {
        return this.#name
    }

    set bank (bank){
        this.#bank = bank
    }
}

let person6 = new getSetPerson ('Carlos', 20, 'Carl', 'Carl123456789')
console.log (person6)
console.log (person6.name)
person6.bank = 'new 23456789'
console.log (person6.bank)


// Herencia de clases

class Animal {
    constructor (name) {
        this.name = name
    }
    sound () {
        console.log ('Emite un Sonido')
    }
}

class Dog extends Animal {

    constructor (name, size) {
        super(name)
        this.size = size
    }

    sound () {
        console.log ('Guau!')
    }

    run () {
        console.log ('el perro corre')
    }
}

let dog = new Dog ('Jake', 10)
console.log (dog)
dog.run ()
dog.sound ()


// Métodos Estáticos

class MathOperations {
    static suma (a,b){
        return a + b
    }
}

console.log (MathOperations.suma(5,10))