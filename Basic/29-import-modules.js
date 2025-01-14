// Importación de módulos

import { suma, PI, name, Circulo } from "./28-export-modules.js"

// Funciones 

console.log (suma (5,6))

// Propiedades

console.log (PI)
console.log (name)

// Importación por defecto

import resta from "./28-export-modules.js"

console.log (resta (8,4))

// Clases
let circulo = new Circulo (4)
console.log (circulo.radius)
console.log (circulo.area())
