// Strings

// Concatenación

let myName = 'José'
let greeting = 'Hola, ' + myName + ' buenos dias.'
console.log (greeting)

// Longitud
console.log (greeting.length)

// Acceso a caracter
console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('buenos'))
console.log(greeting.indexOf('Hola'))
console.log(greeting.includes('José'))
console.log(greeting.includes('Che'))
console.log(greeting.slice(0,11))
console.log(greeting.replace('José','Che'))

// Template literals (plantilla literales)
let message = `hola 
ese es
un curo
de JavaScript` 

console.log(message)
console.log (`Hola ${myName}!`)

let email = 'Che@gmail.com'
console.log (`Hola ${myName}! tu email es: ${email}`)