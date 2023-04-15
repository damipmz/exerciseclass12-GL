/* Ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (ESTE ES EL FRENTE DE LA FILA)
   7      6      5      4      3            2      1


warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) ===> "Hey! Oveja numero 1! El lobo esta cerca!"
warnTheSheep(["sheep", "sheep", "sheep", "wolf"]) ===> "No sigas comiendo ovejas!" */

let sheepsWolf = ['sheep', 'sheep','wolf', 'sheep', 'sheep', 'sheep'];

const warnTheSheep = (arraySW) => {
    let wolfIndex = arraySW.findIndex(item => item === 'wolf');
    let sheepIndex = arraySW.length - wolfIndex - 1; // -1 porque el arreglo arranca de 0

    if (wolfIndex === arraySW.length - 1) {
        return '¡No sigas comiendo ovejas!';
    } else {
        return `¡Hey! Oveja número ${sheepIndex}! El lobo está cerca.`;
    }
}

  console.log(warnTheSheep(sheepsWolf));