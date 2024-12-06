// Map, es una estruturadedatos que ter permite almacenar pares clave-valor

// Declaracion

let myMap = new Map ()

//  inicializacion

myMap = new Map([
    ['name', 'Jose'],
    ['email', 'Josedz6102@gmail.com'],
    ['age', 19]
]) 

console.log (myMap)

// Métodos y propiedades

// set 

myMap.set ('alias', 'Che') // agrego un nuevo par, llave + valor 
myMap.set ('name', 'David') // actualizo un valor usando un llave existente

console.log (myMap)

// get, retorna un valor especifico del Map, si esta asociado a una llave existente

console.log(myMap.get ('aliass')) // no retorna, llave no existe
console.log(myMap.get ('name')) // retona el valor asociado a la llave

// has, comprueba si esta clave existe

console.log (myMap.has('aliass')) // is False
console.log (myMap.has('alias')) // Is True

// delete, eliminar un par de elementos, usando la clave como busqueda

myMap.delete('email')
console.log (myMap) 

// keys, values and entries

console.log (myMap.keys()) // retona una lista con las claves
console.log (myMap.values()) // retorna una lista con los valores
console.log (myMap.entries()) // retorna una lista con los pares

// size

console.log (myMap.size) // retorna el tamaño del obejto

// clear, vacía el objeto

myMap.clear()
console.log (myMap)