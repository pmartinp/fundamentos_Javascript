"use strict"
/* 018compruebaRangoExterno.js/.html: Escribe una condición if para comprobar 
que age NO está entre 18 y 99 inclusive. Crea dos variantes: la primera usando
NOT, y la segunda sin usarlo.
*/

let age = 16;

if (!(age >= 18 && age <= 99)) {
    alert("edad no está entre 18 y 99 inclusive.");
}

if (age < 18 || age > 99) {
    alert("edad no está entre 18 y 99 inclusive.");
}