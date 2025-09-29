// Unindo reduce, filter e map

/*
    Retorne a soma do dobro de todos os pares
    Filter -> Filtrar pares
    Map -> Dobrar os valores
    Reduce -> Reduzir (soma tudo)
*/

// Filter -> Filtrar pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Podemos encadear filter, map e reduce fazendo da seguinte forma.
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador,valor) => acumulador + valor);

// Pares [ 50, 80, 2, 8, 22 ]
// Valores dobrados [ 100, 160, 4, 16, 44 ];
// Somando todos os valore dobrados 324.
console.log(numerosPares);