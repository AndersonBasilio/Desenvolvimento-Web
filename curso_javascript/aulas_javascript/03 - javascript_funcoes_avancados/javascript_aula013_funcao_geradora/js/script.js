/*
    Funções geradoras tem um trabalho expecifico diferente das outras.
    Tem um recuso que fazem "PAUSAR" um codigo em determinado local.
    Nunca entregara todos os valores de uma vez.
*/

function* geradora1(num){
    // Temos um codigo qualquer.
    if(num % 2 === 0){
        console.log('Número é par.')
    } else {
        console.log('Número é impar.')
    }

    // Falamos qual valor ela irá entregar.
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
    yield "Valor 4";
}


let g1 = geradora1(4);

// Para ver o valor fazemos da seguinte forma (g1.next().value), entregará o valor do primeiro yield.
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

// Podemos iterar 
// Utilizando o FOR, sabe quando a função termina
// for(let valor of g1){
//     console.log(valor);
// }

// Criando um gerador infinito.
// function* geradora2(){
//     let i = 0;
       
       // while infinito. 
//     while(true){
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

// Exemplo de geradora que delega tarefa para outra função geradora.
// function* geradora3 (){
//     yield 0;
//     yield 1;
//     yield 2;
// }

// function* geradora4(){
//     yield * geradora3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let g4 = geradora4();

// for(let valor of g4){
//     console.log(valor);
// }

// Pode ser criado com qualquer tipo de dado.
function* geradora5(){
    yield function(){
        console.log("Vim do yield 1");
    }

    // return retornará o valor e fará com que termine ali.
    // return function(){
    //     console.log('Vim do return.')
    // }

    // Outros códigos.
    // ...



    yield function(){
        console.log('Vim do yield 2');
    };
}

let g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();