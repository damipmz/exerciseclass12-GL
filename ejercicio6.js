/* Ejercicio 6: Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos. */

// ([7,4,2,3]) ==> return (5)

let arraY = [1,99,4,6,7,18]; // seria 2+1=3 la menor suma en este caso

const minorSum = (array) => {
    // saco el minimo del primer arreglo
    let min = Math.min(...array);
    // creo un arreglo de todos los numeros de este arreglo mayores al minimo que encontre previamente
    let array2 = array.filter(num => num > min);
    // repito el primer paso pero con el segundo arreglo, entonces, tengo el segundo menor numero
    let min2 = Math.min(...array2);
    // sumo los dos menores numeros, por ende, la menor suma.
    return min + min2;
}

console.log(minorSum(arraY));  
