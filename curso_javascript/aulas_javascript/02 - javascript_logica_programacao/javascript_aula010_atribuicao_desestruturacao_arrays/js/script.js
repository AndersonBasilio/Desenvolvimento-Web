// let a = 'A';//B
// let b = 'B';//C
// let c = 'C';//A

// let letras = [b, c, a];

// //Desestruturação esta do lado esquerdo.
// [a, b, c] = letras; 
// console.log(a, b, c);

// ATENÇÃO!! TODAS AS ATRIBUIÇÕES FEITA COM LET TEM QUE SER LET SERVE PARA CONST TAMBÉM.
//               0  1  2  3  4  5  6  7  8 (Indices)
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Criando array com numeros.

// // Atribuindo um valor do array a uma variável.
// const primeiroNumero = numeros[0] //Pegando o primerio numero

// // Com a destruturação podemos pegar todos valores do array de forma menos "trabalhosa"
// console.log(primeiroNumero);

// (...) - REST -> Operador quando desejamos pegar o resto ele se chama rest
// (...) - SPREAD -> Quando usamos para espalhar ou distribuir algo se chama spread operator.


//Utilizando a atribuição via destruturação
//const [primeiroNumero, segundoNumero, /*...restoNumeros*/] = numeros; //Nesse caso estou pegando o primeiro elemento e o segundo elemento.
//console.log(`Indice 0 = ${primeiroNumero}, Indice 1 = ${segundoNumero}`); //Exibindo os valores.

//console.log('Resto ' + restoNumeros); //Com o operador (...) + uma variável pegamos o resto

// Dessa forma saltamos valores dentro do array.
//const [indiceUm, , indiceTres, , indiceCinco] = numeros

// Quando temos array com outros arrays dentro.
// INDICES           0          1           2     -> Indice fora do array
// INDICES DENTRO  0  1  2    0  1  2    0  1  2  -> Indices de dentro outro array
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]
];

//console.log(numeros[2][2]);// Dessa forma pegamos o indices do array grande e depois pegamos os indices do array dentro do array.

//Atribuição via desestruturação
//const [, [,, seis]] = numeros;

//       0        1       2    -> Indices do array
const [lista1, lista2, lista3] = numeros;

//             2                -> Indice de dentro outro array
console.log(lista3[2]); // Acessando o indice 9