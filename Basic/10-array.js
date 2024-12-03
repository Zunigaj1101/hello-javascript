// array

// Declaracion
let myArray = []
let myArray2 = new Array ()

// inicializacion
myArray = [1,2,3,4]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = ['Jose', 1, 2, "CHE",true]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Jose"
myArray2[1] = "Che"
myArray2[2] = 2

console.log(myArray2)


myArray2 = new Array(3)
myArray2[2] = "Jose"
myArray2[0] = "Che"
myArray2[1] = 2

console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Jose"
myArray2[0] = "Che"
 // myArray2[1] = 2

console.log(myArray2)

myArray = []
myArray[2] = "Jose"
myArray[0] = "Che"
 // myArray2[1] = 2

 console.log(myArray)

 // Métodos comunes

 myArray = []

 // push () agrega elementos al final del array 
 // pop () elimina el ultimo elemento de un array 
 myArray.push('jose')
 myArray.push('Brais')
 myArray.push(2)
 myArray.push('Che')

 console.log (myArray)
 console.log (myArray.pop()) // elimina el ultimo y lo devuelve

 myArray.pop()


 console.log (myArray)

 //shift elmina el primer elemento de un array y retorna ese elemento
 //unshift agrega elementos al inicio de un array

 myArray.shift()
 
 console.log (myArray)

 myArray.unshift('QUE', "ONDA", 1)
 
 console.log (myArray)
 
 // .legnth muestra la longitud de una array
 
 console.log (myArray.length)

 // clear

myArray = []
myArray.length = 0 // hace lo mismo

console.log(myArray)

// slice (start, end) hace una copia de una porcion del array donde start indica por donde empieza 
// y end indica el limite. (end es opcional). no se modifica el array original

myArray.push(1,2,3,4,5,6)
console.log (myArray.length)
console.log (myArray.slice ()) // si no se indica el limite retorna el array completo
console.log (myArray.slice (1)) // indico donde empieza. y toma todos los items 
console.log (myArray.slice (1,4)) // toma los elementos entre start y end, no toma en cuenta end!!

/* si start es negativo, suma ese valor a la longitud del array y usa el resultado como start 
-start + array.lenght = start.  -1 + 6 = 5 */
console.log (myArray.slice (-1)) 
console.log (myArray.slice (5)) 
// ambas dan el mismo resultado

console.log (myArray.slice (1, -3))
console.log (myArray.slice (-3, 1)) // no regresa ningun es igual a valores entre 3 y 1, no tiene logica.

/* splice
cambia el contenido de un array removiendo, reemplazan elementos de una array y/o  agrega nuevos elementos en su lugar
esta operacion me duevelve los elementos modificados

sintaxis:splice(start, deleteCount, item1) 
start = desde que indice empieza a elminar
deleteconut =  cuantos valores va a borrar */

myArray.splice() // sin parametro no mifica nada
myArray.splice (2) // si solo se indica el inicio, elimina todos los elementos restantes
myArray.splice(2, 2) // indico desde que indice empieza a eliminar y cuantos elementos va a eliminar
myArray.splice (0,2, 'Jose', 5, 9) //en el mismo indice me agrega x numero de elementos
myArray.splice (myArray.length,0, 7,8,9) // indico que me agregue elementos al final del array
myArray.splice (0,0,-1,0) //indico que se agreguen dos elemento al inicio del array
console.log (myArray)

