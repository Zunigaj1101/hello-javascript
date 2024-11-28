// 1. Concatena dos cadenas de texto
let myName = 'Jose'
let mySurname = 'Zuniga'
let texto = myName +' '+mySurname

console.log (texto)

// 2. Muestra la longitud de una cadena de texto

console.log (mySurname.length)

// 3. Muestra el primer y último carácter de un string

console.log (texto[0])
console.log (texto[10])

// 4. Convierte a mayúsculas y minúsculas un string

console.log (texto.toUpperCase())
console.log (texto.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let newText = `Una cadena
en varias
lineas`
console.log (newText)
// 6. Interpola el valor de una variable en un string

newText = `Hola ${texto} bienvenido a mi curso de Javascript` 
console.log (newText)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log (newText.replaceAll(' ','-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(newText.includes('Javascript'))

// 9. Comprueba si dos strings son iguales

console.log (newText === mySurname)

// 10. Comprueba si dos strings tienen la misma longitud

console.log (myName.length == myName.length)
console.log (mySurname.length == myName.length)