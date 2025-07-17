// Declaração de funções ocorre (function hoisting - Significa que podemos chamar antes o depois).
// Declaração mais literal
//function falaOi(){
   // console.log('Falando Oi!');
//}

//falaOi(); // Podemos declarar a função antes de declarar a função quanto depois.

// First-class ojects (Objetos de primeira classe)
// Funções podem ser tratadas como dados.
// function expression

// atribuindo uma variável com uma função.
const souUmDado = function(){
    console.log('Sou um dado.');
}

souUmDado(); 

//Atribuindo o valor da variável um parametro.
function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo.');
    funcao();
}

executaFuncao(souUmDado);


// Arrow function
// Seria uma function expression mais curta

const funcaoArrow = () => {
    console.log('Sou uma função arrow function.');
}

funcaoArrow();

// Dentro de objetos podemos ter uma função
const obj = {
    falar: function(){
        console.log('Estou falando, dentro do objeto...');
    }
};

obj.falar();