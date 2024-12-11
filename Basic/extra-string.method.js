// split ()
//Toma una cadena de texto y la parte en subcadenas más pequeñas, basándose en un separador que tú le indiques
// convirtinedo esta cadena de texto en un array

const frase = "Hola, mundo. ¡Cómo estás!";
let palabras = frase.split(' '); // Dividimos por espacios
console.log(palabras); 
console.log(palabras[2]); // accedo solo al elmento string que indico a traves del indice