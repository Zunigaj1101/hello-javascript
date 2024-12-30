let myArray = [1, 2, 3, 4];
let person = {
    name: "Jose",
    age: 19,
    alias: "Che"
}
myArray.push (5)
console.log (myArray)

let myValue = myArray[1]
console.log(myValue)

let myName = person['name']
console.log(myName)

// Desturcturación
// es una sintais que nos permite extraer valores de un array o un objeto y aisgnarlo a variables

// Sintaxis Array
let [myValue0, myValue1, myValue2] = myArray
console.log (myValue0) 
console.log (myValue1) 
console.log (myValue2) 

// ignorar elementos del array

let [myValue3, ,myValue5] = myArray
console.log (myValue3)
console.log (myValue5)

// Sintaxis Object

let {name, age, alias} = person
console.log (name)
console.log (age)
console.log (alias)

//Sintaxis con valores por defecto
let {name2, age2, alias2, email = 'Che@gmail.com'} = person
console.log (name2) // no existe
console.log (age2) // no existe
console.log (alias2) // no existe
console.log (email)

// Sintaxis object con nuevo nombre de variable

let {name: name3, age: age3, alias: alias3, email2 = 'Che@gmail.com'} = person
console.log (name3) 
console.log (age3) 
console.log (alias3) 
console.log (email)


// Desestructuración de objetos anidados
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

let {name: name4, job: {name: jobName} } = person3
console.log (name4)
console.log (jobName)

// Propagación (...)
// expandir elementos de un array u objeto a otro array u objeto

let myArray2 = [...myArray]
console.log (myArray2)

let myArray3 = [...myArray, 6, 7, 8]
console.log (myArray3)

//combinacion de arrays

let myArray4 = [...myArray2, ...myArray3]

console.log (myArray4)