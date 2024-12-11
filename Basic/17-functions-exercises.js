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

// console.log (Math.sqrt(number)) //  Math.sqrt es una funcion (parte del objeto Math) que calcula la raiz

myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function esPrimo(number) {
    if  (number <= 1) {
        return false;
    } for (let i =2; i <= Math.sqrt(number); i++) {
        if (number % i === 0){
            return false;
        }
    }
        return true;
}
for (value of myArray) {
    esPrimo(value) ? console.log (`${value} es primo`):console.log (`${value} no es primo`)
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let myNewArray = [6,2,4,5,6,22,'jose']
let newArr = new Array ()

function comparacionArr (Arr1,Arr2) {
    for (value of Arr1) {
        if (Arr2.includes(value)) {
            newArr.push(value)
        }
    }
}

console.log (newArr)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let sumaPares = 0
function numerosPares (array) {
    for (value of array) {
        if (value % 2 === 0) {
         sumaPares += value
        } 
    }
    return sumaPares
}
numerosPares (myArray)
console.log (`La suma de los numeros pares del array es ${sumaPares}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

myNewArray = []
function alCuadradoArray (array) {
    for (value of array){
        value = value ** 2
        myNewArray.push(value)
    }
}
alCuadradoArray (myArray)
console.log (myNewArray)

// misma funcion, pero usando el método map()
function alCuadradoArray2 (array) {
    newArray = array.map (value => value * value )
}

alCuadradoArray2 (myArray)
console.log (newArray)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

myString = 'que onda gente, todo bien'

function invertirPalabaras (texto) {
    let textoSeparado = texto.split (' ')
    let textoInvertido = textoSeparado.reverse()
    let textoCompletado = textoInvertido.join (' ')
    return textoCompletado
}
console.log (invertirPalabaras (myString))
// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    let resultado = 1

    for (let i = 1; i <= n ; i++) {
        resultado *= i;
    }  console.log (resultado)
}

factorial (5)