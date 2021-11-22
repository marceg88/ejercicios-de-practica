// Escribe una expresión regular que verifique si una cadena es un color hexadecimal 
// válido como #f00 o #bada55.Recuerda que un color hexadecimal puede tener 3 o 6 caracteres,
// y cada caracter puede ir de 0 a 9 y de A a F.

let expresion = /^#([0-9A-F]{3,6}){1,2}$/i

console.log(expresion.test('Z34FF9'))