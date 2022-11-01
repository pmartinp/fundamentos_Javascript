"use strict";
/* 023switchToIf.js/.html: Escribe el código utilizando if..else que corresponda
al siguiente switch:
switch (navegador) {
  case 'Edge':
    alert( "¡Tienes Edge!" );
    break;
  case ‘Explorer:’
    alert('Vuelve a primero, no hemos conseguido enseñarte nada);
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Está bien, soportamos estos navegadores también' );
    break;
  default:
    alert( '¡Esperamos que esta página se vea bien!' );
}
*/

let navegador = prompt("¿Qué navegador usas?");

if (navegador == "Edge") {
  alert("¡Tienes Edge!");
} else if (navegador == "Explorer") {
  alert("Vuelve a primero, no hemos conseguido enseñarte nada");
} else if (
  navegador == "Chrome" ||
  navegador == "Firefox" ||
  navegador == "Safari" ||
  navegador == "Opera"
) {
  alert("Está bien, soportamos estos navegadores también");
} else {
  alert("¡Esperamos que esta página se vea bien!");
}
