"use strict"
/* 013muestraSigno.js/.html: Usando el constructor if..else, escribe
un código que obtenga a través de un prompt un número y entonces muestre en un alert:
•	1, si el valor es mayor que cero,
•	-1, si es menor que cero,
•	0, si es igual a cero.
En la tarea asumimos que siempre el usuario introduce un número.
*/

let number = prompt("Escribe un número");

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}
