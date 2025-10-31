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
    const nome = prompt('Informe seu nome: ');
    const idade = Number(prompt('Informe sua idade: '));
    const rendaMensal = Number(prompt('Informe a Renda Mensal: '));
    const valorEmprestimo = Number(prompt('Informe o valor do Emprestimo: '));

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
    if ((idade < 21 || idade > 60) || (renda < 3000 && emprestimo > condicao)) {
        if(idade < 21 || idade > 60) return `Emprestimo Negado, idade fora da faixa permitida`;
        if(renda < 3000 && emprestimo > condicao) return `Emprestimo Negado, Renda Insuficiente.`
    } else {
        return `${nome}, emprestimo no valor de R$${emprestimo.toFixed(2)} aceito!`;
    }
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
