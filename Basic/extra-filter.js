// filter
// el metodo filter () sirve para crear un nuevo array a partir de un array exitente, pero filtrando aquellos
// elemento que cumplan una funcion específica.
let array = [1,2,3,4,5]
let newArray = array.filter(numero => numero % 2 === 0)// crea un nuevo array tomando solo los numero pares
// osea solo los elementos que se dividen entre 2 y no dejan residuos.

console.log (newArray)