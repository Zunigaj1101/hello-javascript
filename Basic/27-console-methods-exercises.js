// 1. Crea un función que utilice error correctamente

function logError (message) {
    console.error ('Error: ', message)
}
logError ("Probando la funcion")
// 2. Crea una función que utilice warn correctamente

function logAdvertencia (message) {
    console.warn ("Advetencia: ", message)
}
logAdvertencia ("Probando la funcion")

// 3. Crea una función que utilice info correctamente

function logInfo (message) {
    console.info ("Informacion: ", message)
}
logInfo ('funciona')

// 4. Utiliza table
let personas = [
    {name: 'Jose', age: 19},
    {name: 'Carlos', age: 33},
]

console.table (personas)

// 5. Utiliza group

console.group ('Usuario')
console.log ('Name: Jose')
console.log ('Age: 19')
console.groupEnd ()

// 6. Utiliza time

console.time ('temporizador')

for (i = 0; i < 100000; i++) {

}

console.timeEnd ('temporizador')

// 7. Valida con assert si un número es positivo

let number = -1

console.assert (number > 0,'No es un numero positivo')

// 8. Utiliza count

console.count ('Click')
console.count ('Click')
console.count ('Click')
console.count ('Click')
console.count ('Click')
console.countReset ('Click')
console.count ('Click')
console.count ('Click')

// 9. Utiliza trace

function funcA () {
    funcB ()
}

function funcB() {
    console.trace ('Seguimiento de la ejecucion')
}
function funcC() {
    funcA ()
}

funcC()
// 10. Utiliza clear
console.clear()