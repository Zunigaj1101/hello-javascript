// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4, 5]
let [myValue0, myValue1] = myArray

console.log (myValue0, myValue1)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [myValue2 = 0, myValue3 = 0, myValue4 = 0, myValue5 = 0, myValue6 = 0,  myValue7 = 0] = myArray
console.log (myValue2, myValue3, myValue4, myValue5, myValue6, myValue7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
}

let {name, city} =myObject
console.log (name, city)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: newName, city: newCity} = myObject
console.log (newName, newCity)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person3 = {
    name: 'Jose',
    age: 19,
    alias: 'Che',
    walk: function () {
        console.log ('Camino')
    },
    job:{
        name: 'Programador',
        exp: 2,
        work: function (){
            console.log (` ${person3.name}  trabaja como ${this.name2}`)
        }
    }
}

let {age: newAge, job: {name: jobName}} = person3
console.log (newAge, jobName)
// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [6, 7, 8, 9, 10]
let newArray = [...myArray, ...myArray2]
console.log (newArray)

// 7. Usa propagación para crear una copia de un array

let newArray2 = [...myArray]
console.log (newArray2)
// 8. Usa propagación para combinar dos objetos en uno nuevo

let myObject2 = {
    name: 'Maria',
    age: 25,
    city: 'Madrid'
}

let newObject = {...myObject, ...myObject2}
console.log (newObject)

// 9. Usa propagación para crear una copia de un objeto

let newObject3 = {...myObject}
console.log (newObject3)

// 10. Combina desestructuración y propagación

let {name: newName2, ...rest} = myObject
console.log (newName2, rest)