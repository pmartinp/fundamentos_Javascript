"use strict";
// 011ifStringCero.js/.html: ¿Se mostrará el alert?

if ("0") {
  alert("¿me ejecuto o no?");
}

// Sí, se muestra el alert. Esto se debe a que los string,
// mientras tengan contenido dentro mostrarán True, solo mostrando
// False cuando este vacíos. Como en el siguiente caso: ""