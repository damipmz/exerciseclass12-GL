/* Ejercicio 2: Haga una función que solo reciba arreglos con más de 5 elementos y 
luego elimine los últimos 3. En caso de recibir un arreglo de menos de 5 elementos, 
mostrar en pantalla un mensaje de error. */

let elementsPlusFive = [32, 77, 33, 44, 98, 56];
let elementsUnderFive = [1, 4, 2, 3];
let elementsEqualFive = [78, 92, 4, 5, 6];

const plusFiveOnly = (arrOfElements) => {
    if (arrOfElements.length > 5) {
        arrOfElements.splice(-3, 3);
        console.log(arrOfElements);
    } else {
        console.log("ERROR");
    }
}

plusFiveOnly(elementsPlusFive);  