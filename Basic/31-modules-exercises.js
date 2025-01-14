// 1. Exporta una función

export function add(a, b) {
    return a + b
}

// 2. Exporta una constante

export const names = 'Jose'

// 3. Exporta una clase

export class Person {
    constructor(name, lastName, age, email) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.email = email
    }

    run() {
        console.log(`${this.name} is running`)
    }
}

// 4. Importa una función

import { substract } from "./28-export-modules.js";
console.log(substract(2, 4))

// 5. Importa una constante

import { name } from "./28-export-modules.js"
console.log("Hola " + name)
// 6. Importa una clase

// import { Circulo } from "./28-export-modules.js"
// let myObject = new Circulo(10)
// console.log(myObject)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// export default function saludo (nombre) {
//     console.log ('Hola buenas noches' + nombre)
// }

// export default class Person2 {
//     constructor (name,age) {
//         this.name = name 
//         this.age = age
//     }

//     run(){
//         console.log (`${this.name} is running`)
//     }
// }

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// import randomImport from "./28-export-modules.js"
// console.log (randomImport (6,3))

import randomImport from "./28-export-modules.js" 

let myClass = new randomImport (2)
console.log (myClass.area())

// 9. Exporta una función, una constante y una clase desde una carpeta



// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior