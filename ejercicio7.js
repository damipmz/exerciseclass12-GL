// Ejercicio 7: Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor de dicho producto.
// [9,5,10,2,24,-1]) ==> return (50)
// 5 * 10 = 50

let arrayNums =  [5,18,8,11,9,2]; // 18*8=144

const minorProd = (array1) => {
    let array2 = [...array1];
    for (i=0; i <= array1.length - 1; i++){
        array2[i] = array2[i] * array2[i+1];
    }
    //Al darme NaN como ultimo elemento del array porque no tiene ninguno adyacente, corto el array eliminando ese ultimo elemento que me figura (podria haberlo hecho con pop tmb)
    arrayResults = array2.slice(0,-1); 
    maxNumberProd = Math.max(...arrayResults);
    return maxNumberProd;
}

console.log(minorProd(arrayNums));