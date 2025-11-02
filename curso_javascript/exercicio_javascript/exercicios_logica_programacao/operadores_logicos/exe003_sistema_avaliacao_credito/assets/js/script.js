/*
    Exercício 3 — Sistema de avaliação de crédito

    Crie um programa que solicite:

    Renda mensal

    Número de dívidas

    Score de crédito (0 a 1000)

    Regras de aprovação de empréstimo:

    Score deve ser maior que 600

    Renda mensal deve ser maior que 2000

    Número de dívidas deve ser no máximo 2

    Se todas as condições forem atendidas, exiba:

    Empréstimo aprovado!
    Caso contrário, exiba uma mensagem detalhando todos os motivos que impediram a aprovação.
*/

function solicitarInformacaoUsuario() {
    let nome = prompt('Informe seu nome: ');
    let rendaMensal = Number(prompt('informe sua Renda Mensal: '));
    let scoreCredito = Number(prompt('Informe o score de crédito: '));
    let numeroDividas = Number(prompt('Informe o número de divídas: '));

    while (
        nome.trim() === '' ||
        isNaN(rendaMensal) ||
        isNaN(scoreCredito) || scoreCredito < 0 || scoreCredito > 1000 ||
        isNaN(numeroDividas)) {

        if (!isNaN(scoreCredito) && (scoreCredito < 0 || scoreCredito > 1000)) {
            alert('Score de Crédio inválido, não pode ser superior a 1000 e nem inferior a 0.');
        }

        alert('Por favor, informe as informações como foi pedido.');

        nome = prompt('Informe seu nome: ');
        numeroDividas = Number(prompt('Informe o número de divídas: '))
        rendaMensal = Number(prompt('Informe sua Renda Mensal: '));
        scoreCredito = Number(prompt('Informe o score de crédito: '));
    }

    return {
        nome: nome,
        rendaMensal: rendaMensal,
        scoreCredito: scoreCredito,
        numeroDividas: numeroDividas
    };
}

function validaInformacao(nome, rendaMensal, scoreCredito, numeroDividas) {
    let erros = [];

    if (rendaMensal < 2000) erros.push('Empréstimo não aprovado, Renda Mensal é inferior a permitida.');
    if (scoreCredito < 600) erros.push('Empréstimo não aprovado, Score de Crédito é inferior ao permitido.');
    if (numeroDividas > 2) erros.push('Empréstimo não aprovado, divída acima do permitido.');

    if(erros.length > 0) return  `Emprestimo não aprovado: \n${erros.join('\n')}`; 

    return `Parabéns ${nome}! Todas informações foram checadas e o empréstimo foi Aprovado!`;
}

function main() {
    let informacao = solicitarInformacaoUsuario()
    let informacaoVerificada = validaInformacao(informacao.nome,
        informacao.rendaMensal,
        informacao.scoreCredito,
        informacao.numeroDividas
    );

    alert(informacaoVerificada);
}

//main();