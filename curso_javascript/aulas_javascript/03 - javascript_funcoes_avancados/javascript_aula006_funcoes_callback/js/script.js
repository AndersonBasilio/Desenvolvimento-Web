// Funções que são executada quando finaliza.
/*
    Quando trabalhamos com Web as vezes precisamos buscar recurso da BD
    Carregar arquivo JSON, nao temos controle para JS pegar os dados e ate conectar
*/

// Criando uma função que gera tempo aleatório.
function rand(min = 1000, max = 3000){
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

// function f1(){
//     setTimeout(function(){
//         console.log('F1');
//     }, rand());
// }

// function f2(){
//     setTimeout(function(){
//         console.log('F2');
//     }, rand());
// }

// function f3(){
//     setTimeout(function(){
//         console.log('F3');
//     }, rand());
// }

// Para colocar na ordem que queremos
// Recebemos um paramento de callback
function f1(callback){
    setTimeout(function(){
        console.log('F1');
        if (callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('F2');
        if (callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('F3');
        if (callback) callback();
    }, rand());
}

// Preciso que a função f2 seja executada logo depois da f1.
// f1(function(){
//     //Dessa forma irá exuctar de forma ordenada f1, f2 e f3 posterior Olá Mundo!
//     f2(function(){
//         f3(function(){
//             console.log('Olá Mundo!')
//         });
//     });
// });

//Melhorando um pouco o codigo para ficar mais legivel.
f1(f1Callback);

function f1Callback(){
   f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá Mundo!')
}


