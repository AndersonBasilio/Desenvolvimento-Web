/*
    Crie um programa que exiba um menu:
    1 - Dizer Olá
    2 - Mostrar data Atual
    3 - Sair

    O programa deve continuar exibindo o menu enquanto o usuário não escolher a opção 3, usando do while.

*/
function solicitarNomeUsuario() {
    const nome = prompt('Informe seu nome: ');
    return nome;
}

function formatarData() {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    if (dia < 10) dia = `0${dia}`;
    if (mes < 10) mes = `0${mes}`;

    return `${dia}/${mes}/${ano}`;
}

function escolherOpcao(nome) {
    let menu
    do {
        menu = prompt('Escolha uma opção: \n' +
            '[1] - Dizer Olá.\n' +
            '[2] - Mostrar Data Atual.\n' +
            '[3] - Sair. \n '
        );

        if (menu === '1') {
            alert(`${nome} está dizendo olá!`);
        } else if (menu === '2') {
            const exibirData = formatarData();
            alert(`Data atual: ${exibirData}`);
        } else if (menu === '3') {
            alert('Saindo da página...');
            window.close();
            break;
        } else {
            alert(`Opção inválida, tente novamente!`);
        }

    } while (menu !== '3');
}

function main() {
    const nome = solicitarNomeUsuario();
    escolherOpcao(nome);
}

main();

