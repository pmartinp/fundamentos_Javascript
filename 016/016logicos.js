"use strict"
// 016logicos.js/.html: ¿Cuál será el resultado de las siguientes operaciones?

alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1 y 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 y undefined
alert( null || 2 && 3 || 4 ); // 3
