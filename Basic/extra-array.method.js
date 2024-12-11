// filter
// el metodo filter () sirve para crear un nuevo array a partir de un array exitente, pero filtrando aquellos
// elemento que cumplan una funcion específica.
let array = [1,2,3,4,5]
let newArray = array.filter(numero => numero % 2 === 0)// crea un nuevo array tomando solo los numero pares
// osea solo los elementos que se dividen entre 2 y no dejan residuos.

console.log (newArray)


// map ()
// el metodo map () toma los elementos de un array existente, los transforma y lo añade a un nuevo array.

newArray = array.map (value => value * 2) // multiplica por dos cada valor del array

console.log (newArray)

// reverse ()
// este metodo invierte el orden de los elementos de una array, el primerp sera el ultimo y viceversa.

console.log (array) // array orden normal
console.log (array.reverse()) // array orden invertido 

// join ()
// une los todos los elementos de un array y lo convierte en un String, se puede indicar un separador o no.

newArray = ['jose','casa','carro']

console.log (array.join ()) // si no le indico un separador, separa los elemento con una ,
console.log (newArray.join ()) // si no le indico un separador, separa los elemento con una ,

console.log (array.join ('')) // si coloco como seprarador una comillas sin espacio, queda todo pegado
console.log (newArray.join ('')) // si coloco como seprarador una comillas sin espacio, queda todo pegado

console.log (array.join (' ')) // con comillas con espacio deja un espacio por cada elemento
console.log (newArray.join (' ')) // con comillas con espacio deja un espacio por cada elemento

