// Retorne os numeros maiores que 10 e adicione em um array sem filter
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// let numerosMaiorDez = (num) => {
//     let listaNumeroMaiorDez = [];

//     for(let i = 0; i < num.length; i++){
//         if(num[i] > 10){
//             listaNumeroMaiorDez.push(num[i])
//         }
//     };

//     return listaNumeroMaiorDez;
// }


// console.log(numerosMaiorDez(numeros).sort());


/*
    Filter -> Está disponiveis dentro dos arrays.
    Não edita o array original
    Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos.

*/

// Retorne os numeros maiores que 10 e adicione em um array.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* 
    filter é um método que recebe uma função de callback que iterar em cada elemento dentro do array.

*/

// Criando uma função de callback que recebe valor, indice e array, retorna true ou false.
// function callbackFilter(valor){
//     // Quando tivermos uma condição que retorna true ou false retorne a condição.
//     return valor > 10;
// }

// Mais comum jogar a função direto no filter
const numerosMaioresDez = numeros.filter(valor => valor  > 10);
//console.log(numerosMaioresDez);




// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},

];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasMaioresCinquenta = pessoas.filter(obj => obj.idade > 50);
const pessoasTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

// Mostrando as pessoas com nome maior que cinco.
//console.log(pessoasComNomeGrande);

//Mostrando as pessoa que tem mais que ciquenta anos
//console.log(pessoasMaioresCinquenta);


// Mostrando pessoas que termina com a letra (a)
console.log(pessoasTerminaComA);