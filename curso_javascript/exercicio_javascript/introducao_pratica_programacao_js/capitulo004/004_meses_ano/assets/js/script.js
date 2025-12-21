/*
    Peça ao usuário um número de dias.

    Se for 28 ou 29 → imprima “Fev”

    Se for 30 → imprima “Abr, Jun, Set, Nov”

    Se for 31 → imprima “Jan, Mar, Mai, Jul, Ago, Out, Dez”

    Caso contrário → “Erro”.
*/

function solicitaDiasMes() {
    let numeroDiaUsuario = Number(prompt('Insira números de dias: '));

    while (isNaN(numeroDiaUsuario)) {
        alert('Por favor, insira dias válidos.');
        numeroDiaUsuario = Number(prompt('Insira números de dias: '));
    }

    return numeroDiaUsuario;
}

function verificaMeses(diasUsuario) {
    if (diasUsuario === 28 || diasUsuario === 29) return 'Fevereiro.';
    if (diasUsuario === 30) return 'Abril, Junho, Setembro, Novembro.';
    if (diasUsuario === 31) return 'Janeiro, Março, Maio, Julho, Agosto, Outubro, Dezembro.';

    return 'Erro! Dia Inválido.';
}

function main() {
    const diasMeses = solicitaDiasMes();
    const imprimirResultado = document.querySelector('#resultado')
    imprimirResultado.innerHTML = `<h3><i>${verificaMeses(diasMeses)}</i></h3>`;
}

main();