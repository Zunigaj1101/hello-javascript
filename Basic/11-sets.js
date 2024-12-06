/* Set 
set es un conjunto de valores unicos, se parece al array pero se comportan diferentes
set no se ordena por indices, no contiene valores duplicados y sus valores son inmutables (no se modififcan)
*/

//declaracion
{let myArray = [1,2,3,4]
 let mySet = new Set (myArray)
}

let mySet = new Set([1,2,3,4])
console.log(mySet)

// Métodos

// add, agraga un elemento
// delete, borrar ese valor si existe

mySet.add('Jose') //agrega un elemento
console.log (mySet)

mySet.delete() // no hace nada, se le tiene que indicar que elemento queremos borrar
mySet.delete(2) // elimina el elemento 2 y retorna true o false si completo la operacion

console.log (mySet)

// has, verifica si ese valos existe

console.log (mySet.has(1)) // is true
console.log (mySet.has(2)) // is false

// size, sirve para ver el tamaño

console.log (mySet.size)

// Converitr un set a array
let myArray = Array.from (mySet)
console.log (myArray)

myArray.push ('Che')

// Convertir un array a set

mySet = new Set (myArray)

console.log (mySet)

mySet.add ("Hola")
mySet.add ("Hola")
mySet.add ("hola")
console.log (mySet)

// En Set las cadenas de texto deben ser escritas correctamente