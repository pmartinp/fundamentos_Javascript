"use strict"
/*003constantes.js/.html: Examina el siguiente código:
const cumple = '18.04.1982';
const age = someCode(cumple);

Aquí tenemos una constante cumple para la fecha de cumpleaños, y la edad age,
que también es constante.

age es calculada desde cumple con la ayuda de “cierto código” someCode(), que
es una llamada a función que no hemos explicado aún (¡lo haremos pronto!); los
detalles no importan aquí, el punto es que age se calcula de alguna forma basándose
en cumple. ¿Sería correcto usar mayúsculas en cumple? ¿Y en age? ¿O en ambos?

const CUMPLE = '18.04.1982'; // ¿cumple en mayúsculas?
const AGE = someCode(CUMPLE); // ¿age en mayúsculas?*/

/* A la hora de nombrar una constante con valores difíciles de recordar,
como en este caso la fecha de cumpleaños, existe una práctica generalizada
de nombrar esas constantes en mayúscula. Pero, normalmente cuando hablamos
de una constante que se calculan en tiempo de ejecución, como en este caso
age se denomina como cualquier variable normal. Por lo que lo normal en este
caso sería lo siguiente:

const CUMPLE = '18.04.1982';
const age = someCode(cumple);*/