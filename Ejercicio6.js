// // Escribe una expresión regular que verifique si una cadena es una fecha válida, por ejemplo, 
// 12 / 12 / 2012 o 24 / 08 / 1982, etc.

// // Intenta primero crear una expresión que valide el formato únicamente, es decir, q
// ue comience con dos dígitos, seguido de un /, dos dígitos, otro / y cuatro dígitos, sin 
// importar si son fechas inválidas como 45 / 98 / 9234.

// // Empieza a agregarle más restricciones, por ejemplo, el primer dígito puede ser un 
// 0, 1, 2 o 3 únicamente.Eso podría generar días inválidos como 36 pero es un avance.

// // Sigue agregando restricciones para ver hasta qué punto llegas.Sin embargo, ten en 
// cuenta que no vas a encontrar una expresión regular perfecta porque hay meses con diferentes días.

let fecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/

console.log(fecha.test('10/08/2021'))