// 1. Crea una clase que reciba dos propiedades

class NewPerson {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

let person1 = new NewPerson ('jose', 19)


// 2. Añade un método a la clase que utilice las propiedades

class NewPersonMethod {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    
    info () {
        console.log (`${this.name} tiene ${this.age} años de edad`)
    }
}
let person2 = new NewPersonMethod ('Jose', "19")


// 3. Muestra los valores de las propiedades e invoca a la función

console.log (person1.name)
console.log (person1.age)
person2.info ()

// 4. Añade un método estático a la primera clase

class NewPersonMethodStatic {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    
    info () {
        console.log (`${this.name} tiene ${this.age} años de edad`)
    }
    static talk (text){
        return console.log (text)
    }
}
let person3 = new NewPersonMethodStatic ('Jose', "19")

// 5. Haz uso del método estático

NewPersonMethodStatic.talk ('Hola me llamo Jose')

// 6. Crea una clase que haga uso de herencia

class Athlete extends NewPersonMethod{
    constructor (name, age , sport, exp){
        super(name, age)
        this.sport = sport
        this.exp = exp
    }
    run (){
        console.log ('esta persona corre')
    }
} 

let person4 = new Athlete ('jose', 19, 'Futbol', 2)
person4.info ()
person4.run ()
console.log (person4)

// 7. Crea una clase que haga uso de getters y setters

class GetSetPerson {
    constructor (name, age){
        this.name = name
        this.age = age
    }
    get name () {
        return this.name
    }
    set age (Newage) {
        this.age = Newage
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class GetSetPerson2 {
    #name
    #age
    constructor (name, age){
        this.#name = name
        this.#age = age
    }
    get name () {
        return this.#name
    }
    set age (Newage) {
        this.#age = Newage
    }
}

let person5 = new GetSetPerson2 ("JOse", 20)

// 9. Utiliza los get y set y muestra sus valores

console.log (person5)
console.log (person5.name)
person5.age = 19
console.log (person5.age)


// 10. Sobrescribe un método de una clase que utilice herencia 

class Athlete2  extends NewPersonMethod{
    constructor (name, age , sport, exp){
        super(name, age)
        this.sport = sport
        this.exp = exp
    }

    talk () {
        console.log ('Nuevo hablar')
    }
    run (){
        console.log ('esta persona corre')
    }
} 

let person6 = new Athlete2 ('Fernando', 19, 'Voleibol', 5)
person6.talk ()