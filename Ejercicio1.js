const recipe = {
    name: "",
    ingredients: [
        { name: "Pan", quantity: 2 },
        { name: "Jamón", quantity: 1 },
        { name: "Queso", quantity: 1 },
    ]
}

//1. Imprimir la cantidad del primer ingrediente.

console.log(recipe.ingredients[0].quantity)

//2. Imprimir los ingredientes con el siguiente formato:
// 2 de Pan
// 1 de Jamón
// 1 de Queso

function print() {
    for (i = 0; i < recipe.ingredients.length; i++) {
        console.log(`${recipe.ingredients[i].quantity} de ${recipe.ingredients[i].name}`)
    }
}

print()
  
