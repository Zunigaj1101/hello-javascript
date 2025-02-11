// Forma tradicional
let name = 'Jose'
function greeting (name) {
    console.log (name)
}

greeting (name);

// Hoisting
let name2 = 'Jose 2'

greeting2 (name) // se esta lanzando la funcion antes de ser creada. 

function greeting2 (name) {
    console.log (name)
}; // hoisting se encarga de crear la funcion antes de ejecutarla.

console.log (name2)
// console.log (name3) !!! error variable no declarada !!!
let name3 = 'Jose 3' // hositing no funciona con declaracion de las variables.