/*
    Mesmas regras de variável para criar uma função.
    Funções são reutilizaveis.
    
    *Corpo da função
    function saudacao(){
    
    } 

    ----------------------------------------------------------------

    *Passamos os valores dos parametros durante a chamada da função.
    saudacao('Anderson');

    Função que esta retornando um valor recebido da variavel.

    function saudacao(nome){
    return `Bom dia, ${nome}! Tudo bem?`
    }

    const saudar = saudacao('Anderson')
    console.log(saudar)
    
    ----------------------------------------------------------------

    * O que esta dentro das funções não pode ser usado de fora.
    -Interpretador do JS quando encontrar a palavra return não é executado.

    function soma(x, y){
    const resultado = x + y;
    return resultado;
    }
    const resultado = soma(2 , 3)
    console.log(resultado);

    ------------------------------------------------------------------

    * Colocando valor padrão nos parametros 
    function soma(x=1, y=1){
    const resultado = `${x} + ${y} = ${x + y}`;
    return resultado;
    }
    const resultado = soma()
    console.log(resultado);

    * Criando uma função anomina.
    const raiz = function (numero){
    return numero ** 0.5;

    };

    console.log(raiz(9));
    console.log(raiz(25));

    * Arrow Function
    const raiz = (numero) => numero ** 0.5;


*/

const raiz = (numero) => numero ** 0.5;

console.log(raiz(9));
