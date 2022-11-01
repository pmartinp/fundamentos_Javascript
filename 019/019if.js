"use strict"
/* 019if.js/.html: ¿Cuáles de estos alerts va a ejecutarse?
¿Cuáles serán los resultados de las expresiones dentro de if(...)?
*/

if (-1 || 0) alert( "primero" ); // Se ejecuta, True or False
if (-1 && 0) alert( "segundo" ); // No se ejecuta, True and False
if (null || -1 && 1) alert( "tercero" ); // Se ejecuta, null or True and True