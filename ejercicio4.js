/* Ejercicio 4: Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.
El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n) */

let num = 7;

const newArray = (number) => {
    let array1 = [];
    for (let i = 1; i <= number; i++){
        // por cada iteracion voy agregando i + 1 al final del array vacio declarado anteriormente, o sea, lo voy llenando.
        array1.push(i);
    }
    console.log(`nuevo Array: ${array1}`);
}

newArray(num);
