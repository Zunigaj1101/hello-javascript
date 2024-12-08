// Loops o Bluces

// for 

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8,8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`elemento ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log (`Hola ${i}`) 
    i++
}

//while (true) {    
//}  blucle infinito

// do while

i = 6
do {
    console.log (`Hola nuevo ${i}`) 
    i++
} while (i < 5)

// for of

let myString = 'Hola JavaScript'
let myArray = [1,2,3,4]
let mySet = new Set([4,3,2,1])
myMap = new Map([
    ['name', 'Jose'],
    ['email', 'Josedz6102@gmail.com'],
    ['age', 19]
]) 

for (let value of myArray) {
    console.log (value)
}

for (let value of mySet) {
    console.log (value)
}

for (let value of myMap) {
    console.log (value)
}

for (let value of myString) {
    console.log (value)
}

// buenas practicas

// break y continue

for (let i = 0; i < 7; i++) {
    if ( i == 3 ) {
        continue
    } else if (i == 6){
        break
    }
    console.log(`Hola ${i}`)
}