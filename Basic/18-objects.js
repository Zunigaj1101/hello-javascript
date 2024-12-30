// Objects

// Sintaxis

let person = {
    name: 'Jose',
    age: 19,
    alias: 'Che'
}
console.log (typeof person)

// Acceso a propiedades


// Notacion punto
console.log (person.name)

// Notacion corchetes
console.log (person['name'])

// Modificación de propiedades

person.name = 'Jose'
console.log (person.name)
person.age = "20"
console.log (person.age)
console.log (typeof person.age)

//Eliminar propiedades

delete person.age
console.log (person)

// añadir propiedades  

person.email = 'Che@gamil.com'
person['age'] = 29
console.log (person)


//Metodos (Funciones)

let person2 = {
    name: 'Jose',
    age: 19,
    alias: 'Che',
    walk: function () {
        console.log ('Camino')
    }
}

person2.walk()

// Anidación de objetos

let person3 = {
    name: 'Jose',
    age: 19,
    alias: 'Che',
    walk: function () {
        console.log ('Camino')
    },
    job:{
        name2: 'Programador',
        exp: 2,
        work: function (){
            console.log (` ${person3.name}  trabaja como ${this.name2}`)
        }
    }
}

console.log(person3)
console.log(person3.name)
console.log(person3.job.name)
person3.job.work()

let person4 = {
    name: 'Jose',
    age: 19,
    alias: 'Che'
}

console.log (person)
console.log (person4)

console.log (person == person4)
console.log (person === person4)
console.log (person.name === person4.name)

//iteración de objetos
for (key in person4){
    console.log (key + ' : ' + person4[key])
}

// funciones constructoras

function Person (name,age) { // Deberia ser una Clase
    this.name = name
    this.age = age
}

let person5 = Person ('Jose', 20)
console.log (person5)
console.log (typeof person5)