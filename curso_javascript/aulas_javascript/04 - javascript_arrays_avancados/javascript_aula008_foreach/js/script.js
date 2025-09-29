/*
    foreach está disponivel apenas em array.
    itera somente nos valores não retorna nada.
*/

const numeros = [10, 20, 30];
let total = 0;
numeros.forEach(valor => total += valor);

console.log(total);