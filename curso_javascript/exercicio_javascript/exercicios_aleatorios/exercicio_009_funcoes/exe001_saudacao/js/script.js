//Exercício 1: Função Simples

//Crie uma função chamada "saudacao" que recebe um nome como parâmetro e retorna uma saudação personalizada.

var nome  = prompt('Informe seu nome: ');
var idade = Number(prompt('Informe sua idade: '));
var linguagemProgramacao = prompt('Informe a linguagem de programação: ');

function saudar(nome, idade, linguagemProgramacao){
    alert(`Olá ${nome}, tudo bem? Você tem ${idade} anos e a linguagem que escolheu é ${linguagemProgramacao}.`);
}

saudar(nome, idade, linguagemProgramacao);

