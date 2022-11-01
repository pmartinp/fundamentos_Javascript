"use strict";
/* 009corregirAdicion.js/.html: Aquí hay un código que le pide al usuario dos
números y muestra su suma. Funciona incorrectamente. El resultado en el ejemplo
a continuación es 12 (para valores de captura predeterminados). ¿Por qué? Arréglalo.
El resultado debería ser 3.*/

// incorrecto
let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);
alert(a + b); // 12

// correcto
a = parseInt(a);
b = parseInt(b);
alert(a + b); // 3

// Este problema ocurre porque la función prompt devuelve los valores como string y hay que
// reconvertirlos a int o float antes de operar con ellos matemáticamente.