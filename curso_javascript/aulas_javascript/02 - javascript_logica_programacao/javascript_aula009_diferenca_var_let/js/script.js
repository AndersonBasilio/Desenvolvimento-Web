// Mais diferenças entre var e let
// Variáveis fora do bloco entendemos como escopo global
// var só tem escopor de função
//const verdadeira = true;

//let nome = 'Anderson'; //Criando uma variável fora do bloco.

//var nome2 = 'Metallica'; // Criando

//let nome = 'Basilio'; // Não podemos redeclarar variavel utilizando let
//console.log(nome); // Erro SyntaxError: Identifier 'nome' has already been declared 

//var nome2 = 'Basilio';
//console.log(nome2) //Utilizando var irá permitir

//if(verdadeira){
    // Variáveis dentro do bloco entendemos como escopo global.
    // Criando a variável dentro do bloco (if)
   // let nome = 'Basilio' // let tem escopo de bloco {... bloco}, irá "reatribuir" o valor da variável.
    //var nome2 = 'Redeclarando a variável dentro do IF' // Redeclarando variável.
    // Utilizando var
    //console.log(nome, nome2);
    
    //Expressão de bloco aninhada
   // if(verdadeira){
     //   var nome2 = 'Utilizando var dentro do bloco if aninhado' // Redeclarada.
        //let nome = 'Outra Coisa!' // Foi criando com o mesmo nome dentro de cada bloco.
        //Se não encontrar a variável dentro do bloco irá procurar dentro do bloco "de fora".
       // console.log(nome, nome2);// Busca a variável dentro do bloco.
    //}
//}

//console.log('Console log global: ' + nome, nome2); // Todo momento que a variável foi redeclarada ela foi reinicializada e paga o ultimo valor.

//Escopo de função.
//Funções proteje as variáveis que estão dentro delas, então não conseguimos acessa-las de fora .
//Dentro da funções conseguimos acessar as variáveis de fora, chamamos de Closure.

// //var sobrenome = 'Basilio'; // Variável global
// const verdadeira = true; // Variável global
// function falaOi(){
//     //var nome = 'Anderson' Variáve de dentro do escopo da função.
//     //console.log('Seu sobrnome é ' + sobrenome); // Acessando a variável de fora da função.

//     if(verdadeira){
//         let nome = 'Anderson'; // Quando utilizamos let nao conseguimos acessar de fora do bloco.

//         // Criando uma variável dentro do bloco.
//         var sobrenome = 'Basilio';
//     }
    
//     //Utilizando var e exibindo fora do blobo (IF)
//     console.log('Seu sobrnome é ' + sobrenome);// Exibe normalmente.
    

//     //console.log(nome); //Utilizando let e tentando acessar de fora do bloco "ReferenceError: nome is not defined"
    
// }

// //console.log('Oi ' + nome); // ReferenceError: nome is not defined ao tentar exibir a vairável de dentro da função.
// falaOi()

// Outra diferença é o Hoisting
// Dessa forma JS eleva a declaração variável todas para o topo do código e não coloca o valor por este motivo retorna undefined.

//var sobrenome;// Eleva para o topo do código.
//sobrenome  = 'Basilio'; //Depois passamos o valor para variável.

console.log(sobrenome);

let sobrenome = 'Basiio' //Utilizando let não ocorre o Hoisting "ReferenceError: Cannot access 'sobrenome' before initialization"

// // Dessa forma ocorre o Hoisting
// function minhaFuncao(){

// }

// // Dessa forma não ocorre Hoisting
// const minhaFuncao = function(){

// }