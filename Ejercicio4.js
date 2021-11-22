// Escribir una función toUpperCase que reciba un string y retorne el mismo texto en mayúsculas 
//sin utilizar el toUpperCase de los strings.

// Nota: La entrada sólo va a tener a - z y A - Z.

// toUpperCase("hola") // "HOLA"
// toUpperCase("anita lava la tina") // "ANITA LAVA LA TINA"
// toUpperCase("Hola") // "HOLA"

function toUpperCase(texto) {
    let texto1 = []
    let texto2 = []
    for (l = 0; l < texto.length; l++) {
        texto1 = texto[l].charCodeAt(texto[l])
        texto2 = String.fromCharCode(texto1-32)
        console.log(texto2)
    }
}

toUpperCase("hola mundo")