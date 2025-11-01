/*
    🧠 2. Sistema de empréstimo bancário

    Solicite:

    idade

    renda mensal

    valor do empréstimo

    O empréstimo só é aprovado se:

    idade entre 21 e 60 anos,

    renda mensal >= 3000,

    valor do empréstimo não ultrapassar 10x a renda.

    Dica: combine && e operadores relacionais em um só if.

*/

// Solicita Infomação.
function solicitarInformacao() {
    let nome = prompt('Informe seu nome: ');
    let idade = Number(prompt('Informe sua idade: '));
    let rendaMensal = Number(prompt('Informe a Renda Mensal: '));
    let valorEmprestimo = Number(prompt('Informe o valor do Emprestimo: '));

    while ( nome.trim() === '' || isNaN(idade) || isNaN(rendaMensal) || isNaN(valorEmprestimo)){
        alert('Por favor, preencha os campos corretamente!')
        nome = prompt('Informe seu nome: ');
        idade = Number(prompt('Informe sua idade: '));
        rendaMensal = Number(prompt('Informe a Renda Mensal: '));
        valorEmprestimo = Number(prompt('Informe o valor do Empréstimo: '));
    }
    
    return {
        nome: nome,
        idade: idade,
        rendaMensal: rendaMensal,
        valorEmprestimo: valorEmprestimo
    };
}

// Verifica condições para aprovação.
function verificaAprovacao(nome, idade, renda, emprestimo) {
    const condicao = renda * 10;
    if(idade < 21 || idade > 60) return `Emprestimo Negado, idade fora da faixa permitida.`;
    if(renda < 3000 && emprestimo > condicao) return `Emprestimo Negado, Renda Insuficiente.`

    return `${nome}, emprestimo no valor de R$${emprestimo.toFixed(2)} aprovado com sucesso!`;
}

// Função principal.
function main() {
    let informacao = solicitarInformacao();
    let informacaoVerificada = verificaAprovacao(informacao.nome, 
        informacao.idade, 
        informacao.rendaMensal, 
        informacao.valorEmprestimo
    );

    alert(informacaoVerificada);
}

// Chamando a função principal
main();
