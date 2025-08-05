// Parâmetros da Função

// // Não esta sendo enviado nenhum parametro. 
// function funcao(){
//     // Temos uma variável disponivel chamada arguments.
//     console.log(arguments[11]);// Irá retornar um objeto com os valores 
// }

// // Irá executar normalmente, quando enviamos o valor e um argumento.
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12); 

// Somando todos valores recebidos.
// Função definida com a palavra function tem uma variável especial que se chama arguments.
// arguments sustenta todos os argumento enviados. funcao(1, 2, 3, 4, 5, 6, 7); 
// Podemos criar os parametros se quisermos.
// function funcao(a, b, c){
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     }
//     //   valores de    1, 2, 3
//     console.log(total, a, b, c);
// }

// funcao(1, 2, 3, 4, 5, 6, 7); 

// function funcao(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f);

// }

// //Irá criar as variáveis e colocar como undefined.
// // Argumentos são os valores que enviamos para os parâmetros.
// funcao(1, 2, 3);

// Obtendo valor padrão de b, adicionando valor padrão.
// function funcao(a, b = 2, c = 4){
//     //b = b || 0; // Obtento valor de b maneira antiga.
//     console.log(a + b + c);
// }

// Retorna NaN
// funcao(2); -> Retornará NaN

// Precisando de pular o valor de b, somente utilizando undefined.
// funcao(2, undefined, 20);

// Utilizando atribuição via desestruturação, em função.
// function funcao({ nome, sobrenome, idade }){
//     console.log(nome, sobrenome, idade);
// }

// // Podemos que criar um objeto e utilizar dessa forma.
// let obj = {nome: 'Anderson', sobrenome:'Basilio', idade: 20}

// // Enviando um objeto como argumento.
// funcao(obj);


//Utilizando array
// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// }

// // Podemos que criar um objeto e utilizar dessa forma.
// let lista = [ 'Anderson', 'Basilio', 20];

// // Enviando um objeto como argumento.
// funcao(lista);

// Podemos criar uma função
// Utilizando rest operator que irá receber todo o resto.
// Se colocarmos algum parâmetro depois do rest irá ter um erro.
// function conta(operador, acumulador, ...numeros){
//     for (let numero of numeros){
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '*' && acumulador === 0 ) acumulador = 1; acumulador *= numero;
//         if(operador === '/' && acumulador === 0 ) acumulador = 1; acumulador /= numero;
//     }
//     console.log(acumulador);

// }

// conta('+', 0, 20, 30, 40, 50);

// Utilizando com uma function expression,
// Não tem argument em Arrow Function.
// const conta = function(operador, acumulador, ...numeros){
//     // for (let numero of numeros){
//     //     if(operador === '+') acumulador += numero;
//     //     if(operador === '-') acumulador -= numero;
//     //     if(operador === '*' && acumulador === 0 ) acumulador = 1; acumulador *= numero;
//     //     if(operador === '/' && acumulador === 0 ) acumulador = 1; acumulador /= numero;
//     // }

//     console.log(arguments);

// };

// Podemos utilizar para pegar os argumentos, funciona em qualquer tipo de função.
const conta = function(...args){

    console.log(args);
};

conta('+', 0, 20, 30, 40, 50);