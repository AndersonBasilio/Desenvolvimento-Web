/*
    Reduce é mais utilizada para reduzir uma array a um valor.
    Conseguimos fazer tanto map, filter ou reduce (não é ideal)

*/

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Recebe o seguinte parâmetros: acumulador, valor, indice, array e o valor inicial para o acumulador.
// Valor do acumulador é opcional, retornará o primeiro valor do item.
// const somaValores = numeros.reduce(function(acumulador, valor){
//     // Sempre precisamos retornar algum valor qualquer no acumulador.
//     acumulador += valor;
//     return acumulador;

//   // Recebendo um valor incial para o acumulador.
//   // Valor do acumulador é opcional, retornará o primeiro valor do item (}, 0);).
  
//   // Se mandarmos um array para o acumulador
// }, 0);

// //console.log(`Total: ${somaValores}`);

// Retorne um array com os pares (filter)
// const somaValores = numeros.reduce(function(acumulador, valor){
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(`Array com números pares: ${somaValores}`);

// Retorne um array com o dobro dos valores (map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosDobrados = numeros.reduce(function (acumulador, valor){
//     acumulador.push(valor * 2);
//     return acumulador;
  
//   // Colocar lista ao invés do valor do acumulador.
// }, []);

// console.log(numerosDobrados);

// Retorne a pessoa mais velha.
const pessoas = [
    {nome: 'Anderson', idade: 34},
    {nome: 'Luiz', idade: 123},
    {nome: 'Maria', idade: 63},
    {nome: 'Letícia', idade: 89},
    {nome: 'Rosana', idade: 52},
    {nome: 'Wallace', idade: 92},

];

// Reduce é mais utilizada para dividir o elemento em um array.
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;

}, 0);

// Retorna a pessoa mais velha.
console.log(maisVelha);