// 1. Escribe un comentario en una línea

// Estoy comentando en una linea

// 2. Escribe un comentario en varias líneas

/* Estoy 
comentando  
en varias
lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = 'tipo texto'
let myNumber = 123
let myBoolean = true
let mySymbol = Symbol('que onda gente')
let myUndefinedValue
let myNull = null
let myBigInt = 123456789012345678901234567890123124234234235445n

// 4. Imprime por consola el valor de todas las variables

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(mySymbol)
console.log(myNull)
console.log(myUndefinedValue)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myNull)
console.log(typeof myUndefinedValue)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = 'Hola'
myNumber = 30.1
myBoolean = false
mySymbol = Symbol('new')
myBigInt = 19261365761257357163257326n

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(mySymbol)
console.log(myBigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 20
myNumber = 'nueva cadena'
myBoolean = 1234567890n
mySymbol = false
myBigInt = Symbol('whats')
myUndefinedValue = null
myNull = undefined

console.log(typeof myNumber)
console.log(typeof myString)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myUndefinedValue)
console.log(typeof myNull)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const names = 'jose'
const phoneNumber = 414
const isStudent = true
const newSymbol = Symbol('const')
const cedula = 30000000n
const sinDefinicion = undefined
const sinValor = null

console.log(typeof names)
console.log(typeof phoneNumber)
console.log(typeof isStudent)
console.log(typeof newSymbol)
console.log(typeof cedula)
console.log(typeof sinDefinicion)
console.log(typeof sinValor)
console.log(names)
console.log(phoneNumber)
console.log(isStudent)
console.log(cedula)
console.log(sinDefinicion)
console.log(sinValor)
console.log(newSymbol)
// 9. A continuación, modifica los valores de las constantes

// names = 'Juan'
// phoneNumber = 412
// isStudent = false
// cedula = 20000000n
// newSymbol = Symbol("idk")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse