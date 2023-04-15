// Ejercicio 1: Haga una función que elimine el primer elemento del arreglo.

let numbers = [3, 5, 45, 77, 8, 22]

const deleteFirstNumber = (array1) => {
    array1.shift()
    console.log(array1)
}

deleteFirstNumber(numbers)
