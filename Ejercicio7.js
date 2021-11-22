// Escribe una expresión regular que verifique si una dirección de email es válida.

// Puedes empezar por una expresión que verifique que comience con al menos un caracter, q
// ue tenga una @y que tenga más caracteres, seguido de un punto, seguido de más caracteres.

// Así como en el ejercicio anterior no vas a encontrar una expresión regular perfecta pero te 
// puede ayudar a filtrar emails que claramente sean inválidos.
let correo = /[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]$)/

console.log(correo.test('marceg8810@gmail'))