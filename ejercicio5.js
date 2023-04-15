
// Ejercicio 5: Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto.
// findUniq([1,1,1,1,2,1,1,1]) ==> return (2)


let array = [1, 1, 1, 1, 1, 1, 1, 3, 1];
let array3 = [4,4,4,4,7,4,4,4,4,4];

const numsArray = (array1) => {
  let uniqueNums = array1.filter((num) => num !== array1[0]);
  if (uniqueNums.length === 1) {
    num = uniqueNums[0];     
} else {
    num = array1[0];
}
  return num;
};

console.log(numsArray(array3));