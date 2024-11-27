// 1. Crea una variable para cada operación aritmética

let a = 4
let b = 2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let suma = 2
let resta = 1
let multiplicacion = 3
let division = 4
let modulo = 5
let exponente = b

suma += b
resta -= a
multiplicacion *= 10
division /= 2
modulo %= a
exponente **= 3

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 < 10)
console.log(multiplicacion >= 10)
console.log(b == 2)
console.log(division != 1)
console.log( b === 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log (5 >=  6)
console.log (resta == b)
console.log (a === undefined)
console.log (exponente < a)
console.log (a !== a)

// 5. Utiliza el operador lógico and

console.log (resta = b-5 && 5 <= exponente)

// 6. Utiliza el operador lógico or
b++
console.log ( b == 3 || b == a)

// 7. Combina ambos operadores lógicos

console.log (5 == b + 2 && exponente < a || 3 == b)

// 8. Añade alguna negación
console.log (!(5 == b + 2 && exponente < a || 3 == b))

// 9. Utiliza el operador ternario


isActive =  b + 1 == 4 
isActive ? console.log ('Sí está activo') : console.log ("No está activo")

// 10. Combina operadores aritméticos, de comparáción y lógicas

isActive =  exponente + b == 111
isActive ? console.log ('Sí es correcto') : console.log ("No es correcto")