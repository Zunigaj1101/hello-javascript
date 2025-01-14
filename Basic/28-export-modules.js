// Exportación de módulos

export function suma (a,b) {
    return a+b
}

export function substract (a,b) {
    return a-b
}

// Propiedades

export const PI = 3.14
export let name = "Jose"

// Exportación por defecto

// export default function resta (a,b) {
//     return a-b
// }

// Clases 

export default class Circulo {
    constructor (radius) {
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius,2)
    }
}