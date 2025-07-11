/*
    while e do while -> Estrutura de repetição
    Não sabemos as vezes da repetições.

    Estrutura while:
    Temos que criar a variável fora do laço
    let contador = 0;
        condição
    while(contador <= 10){
        console.log(contador);

        //NUNCA ESQUECER DE ICREMENTAR O VALOR SENÃO TERÁ LOOP IFINITO!
        contador++
    }
 */

// Pecorrendo a string, não é recomendavel podemos utilizar o FOR.
// const nome = 'Anderson';

// // Variável contadora
// let contador = 0;

// while(contador < nome.length){
//     console.log(nome[contador]);
//     contador++
// }

// console.log('Continua executando o código.');
// console.log('')
// console.log('WHILE');
function random(minimo, maximo){
    const r = Math.random() * (maximo - minimo) + minimo;
     return Math.floor(r);
 }
const min = 1;
const max = 50;
let rand = random(min, max);
let contador = 0;

// // Só entrará no laço se a condição for true
// while(rand !== 10){
//     rand = random(min, max);
//     contador ++
//     console.log(rand);    
// }
// console.log('Foram executado ' + contador + ' vezes para encontrar o número ' + rand);


//do while
console.log('');
console.log('--------------------------------------------------------------------------');
console.log('DO WHILE');

// Faça tal coisa enquanto, irá executar o codigo depois irá checar a condição.
// Executa pelo menos uma vez sempre.
do {
    rand = random(min, max);
    contador ++
    console.log(rand);
} while(rand !== 10);
console.log('Foram executado ' + contador + ' vezes para encontrar o número ' + rand);
