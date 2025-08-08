// Closure é a habilidade para acessar o escopo léxico.

// Tem acesso a três escopos, retornaFuncao, função anonima e o global.
function retornaFuncao(nome){
    //const nome = 'Anderson';

    // Retornando uma função anonima.
    return function () {
       return nome; 
    };
}

// Mudando o contexto léxico, chamamos de closure sempre que chamamos a função sera os nomes do parametro.
const funcao = retornaFuncao('James');
const funcao2 = retornaFuncao('Hetfield');

// Temos tambem console.dir(funcao);
console.dir(funcao); // Exibe a função anonima.
//onsole.log(funcao);

console.log(funcao(), funcao2());