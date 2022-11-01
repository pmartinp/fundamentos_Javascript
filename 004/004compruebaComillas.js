"use strict"
// 004compruebaComillas.js/.html: ¿Cuál es la salida del script? Piénsalo y combruébalo.

let name = "Peter Parker";
alert( `Hola ${1}` ); // Hola 1
alert( `Hola ${"name"}` ); // Hola name
alert( `Hola ${name}` ); // Hola Peter Parker

/* Esto se debe a que cuando introducimos "name" nos referimos al String con valor 'name'.
Mientras que, al llamar a name sin las comillas, nos referimos a la variable con valor 'Peter Parker'.
*/