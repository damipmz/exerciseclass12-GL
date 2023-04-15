/* Ejercicio 3: Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número 
a cada elemento del arreglo y devolver el arreglo modificado. */

let arraY = [3, 4, 9, 88, 1];
let num1 = 2;

const plusNumber = (array1, num) => {
    newArray = array1.map((x) => x + num);
    console.log(`Nuevo Array modificado: ${newArray}`);
}

plusNumber(arraY, num1)


/* const plusNumber = (array1,num) =>{
    newArray = array1.map(function(x) {
        return x + num;
    })
    console.log(newArray);
}

plusNumber (arraY, num1) */