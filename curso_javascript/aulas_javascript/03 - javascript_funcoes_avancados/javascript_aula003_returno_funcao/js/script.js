// return -> Quando utilizamos return retorna uma valor
// Termina a função

// function soma(a, b){
//     return `${a} + ${b} = ${a + b}`;
// }

// // Retorno de alert sempre irá retornar undefined.
// // console.log está somente exibindo a informação, função abaixo não retorna nada..
// function soma2(a, b){
//     console.log(`${a} + ${b} = ${a + b}`)
// }

// soma2(5, 2);

// Função que não retorna nada, mas é importante.
// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'orange' // Executa alguma ação.
// })

// Podemos retornar um objeto com nome e sobrenome.
// function criaPessoa(nome, sobrenome){
//     return { nome, sobrenome };
// }

// const pessoaUm = criaPessoa('Anderson', 'Basilio');
// const pessoaDois = criaPessoa('James', 'Hetfield');

// // Ao verificar o typeOf será object.
// console.log(pessoaUm);
// console.log(pessoaDois);

//
// function criaFrase(comeco){
//     function falaResto(resto){
//         return `${comeco} ${resto}`; // Retornando uma string.
//     }

//     return falaResto; // Retornamos a função em si.
// }

// // variavel é uma função pois recebeu a função criaFrase()
// //const olaMundo = criaFrase('Olá');

// //console.log(olaMundo('Mundo!')); // Mostra na tela Função que falaResto.

// const fala = criaFrase('Ola');
// const resto = fala('Mundo!');

// console.log(resto);

// Repetições de funções, que podemos evitar.
// function duplica(numero){
//     return numero * 2;
// }

// function triplica(numero){
//     return numero * 3;
// }

// function quadriplica(numero){
//     return numero * 4;
// }

//Evitamos dessa forma.
function criaMultiplicador(multiplicador){
    //Multiplicador esta nesse escopo.
    //Podemos retornar direto uma função.
    return function (numero){
        return numero * multiplicador;
    }
}

//Exemplo de Closure.
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// Mostra na tela o resultado.
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
