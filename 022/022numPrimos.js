"use strict";
/* 022numPrimos.js/.html: Un número entero mayor que 1 es llamado primo
si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo.
En otras palabras, n > 1 es un primo si no puede ser divido exactamente por ningún
número excepto 1 y n. Por ejemplo, 5 es un primo, porque no puede ser divido
exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.
Para n = 10 el resultado será 2, 3, 5, 7.
PD. El código debería funcionar para cualquier n, no debe estar programado para valores fijos.
¿Puedes hacerlo con los 3 tipos de bucle? Demuéstralo.
*/

let primeNumbers = prompt("Muéstrame los números primos del 2 al...");
let arrayNumbersFor = [];
let arrayNumbersWhile = [];
let arrayNumbersDoWhile = [];

// bucle for
for (let i = 2; i <= primeNumbers; i++) {
  if (esPrimo(i)) {
    arrayNumbersFor.push(i);
  }
}
alert(arrayNumbersFor.toString());

// bucle while
let i = 2;
while (i <= primeNumbers) {
  if (esPrimo(i)) {
    arrayNumbersWhile.push(i);
  }
  i++;
}
alert(arrayNumbersWhile.toString());

// bucle do... while
i = 2;
do {
  if (esPrimo(i)) {
    arrayNumbersDoWhile.push(i);
  }
  i++;
} while (i <= primeNumbers);
alert(arrayNumbersDoWhile.toString());

// se que todavía no se habían visto funciones, pero me daba mucha pereza hacer esto sin la función
function esPrimo(number) {
  for (let index = 2; index < number / 2; index++) {
    // utilizo como parámetro numero / 2 para ahorra iteraciones.
    if (number % index == 0) {
      return false;
    }
  }
  return true;
}
