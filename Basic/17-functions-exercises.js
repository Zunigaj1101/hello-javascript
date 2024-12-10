// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a = 0, b = 0 ) {
    return a + b
}   console.log (suma (10, 7)) 

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let myArray = [1,2,3,4,5,6,7,8,7,22,4,100]

function valorMaximoArr (array) {
    let max = 0
    for (let i = 0; i < array.length ; i++){
        if (array[i] > max) {
            max = myArray[i]
        }
    } return max
    
}
console.log (valorMaximoArr (myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let myString = 'Prueba de funcion'
let vocales = ['a','e','i','o','u']
let conteo = 0

function cantidadVocales (texto) {
    for (value of texto){
        if (vocales.includes(value)) {
           conteo ++
        }
    } 
    return conteo
}

console.log (`${myString} contiene ${cantidadVocales(myString)} vocales `)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

myArray = ['jose', 'diciembre', 'pelota','Pajaro']

let newArray = new Array()
const mayusculas = (arr,newArr) => {
    for (value of arr){
        newArr.push (value.toUpperCase())
    }
}
mayusculas (myArray,newArray)
console.log (newArray)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado