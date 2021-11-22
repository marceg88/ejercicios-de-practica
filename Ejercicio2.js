// Escribir una función capitalizar que reciba un string y retorne otro string que capitalice 
// cada palabra de la frase.

function capitalizar(cadena) {
    let cadenas = cadena.split(' ')
    cadenas = cadenas.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ')
    return cadenas
    
}

console.log(capitalizar(" hola mundo "))

