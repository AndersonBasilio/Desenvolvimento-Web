/*

    Abaixo está descrito como encontrar a data da Páscoa em qualquer ano. Apesar de sua aparência intimidadora, este não é um problema difícil. Observe que ⌊x⌋ é a função piso (floor function), que para números positivos simplesmente remove a parte decimal do número.
    Por exemplo: ⌊3.14⌋ = 3.
    A função piso (floor) faz parte do módulo math.

    C = século (por exemplo, 1900 → C = 19)
    Y = ano (com todos os quatro dígitos)
    m = (15 + C − ⌊C/4⌋ − ⌊(8C + 13) / 25⌋) mod 30
    n = (4 + C − ⌊C/4⌋) mod 7
    a = Y mod 4
    b = Y mod 7
    c = Y mod 19
    d = (19c + m) mod 30
    e = (2a + 4b + 6d + n) mod 7

    A Páscoa cai em março (22 + d + e) ou abril (d + e − 9).
    Há uma exceção se d = 29 e e = 6: nesse caso, a Páscoa ocorre uma semana antes, em 19 de abril.
    Há outra exceção se d = 28, e = 6, e m = 2, 5, 10, 13, 16, 21, 24 ou 39: nesse caso, a Páscoa ocorre uma semana antes, em 18 de abril.

    Escreva um programa que peça ao usuário para inserir um ano e exiba a data da Páscoa nesse ano.

*/

const resultado = document.querySelector('#resultado');
// Entrada será o ano
function anoPascoa() {
    const anoUsuario = prompt('Informe o ano que deseja verificar: ');
    return Number(anoUsuario);
}

// Obtem século.
const descobrirSeculo = ano => Math.floor(ano / 100);

function calcularPascoa() {
    const ano = anoPascoa();
    const C = descobrirSeculo(ano);
    const Y = ano;
    const m = (15 + C - Math.floor(C / 4) - Math.floor((8 * C + 13) / 25)) % 30;
    const n = (4 + C - Math.floor((C / 4))) % 7;
    const a = ano % 4;
    const b = ano % 7;
    const c = ano % 19;
    const d = (19 * c + m) % 30;
    const e = (2 * a + 4 * b + 6 * d + n) % 7;
    let dia;
    let mes;

    if (d === 29 && e === 6) {
        dia = 19; mes = 'Abril';
    } else if (d === 28 && e === 6 && [2, 5, 10, 13, 16, 21, 24, 29].includes(m)) {
        dia = 18; mes = 'Abril';
    } else if (22 + d + e <= 31) {
        dia = 22 + d + e; mes = 'Março';
    } else {
        dia = d + e - 9; mes = 'Abril';
    }
    resultado.innerHTML += `<h1>Páscoa é dia ${dia} de ${mes} ${ano}</h1>`;
}

calcularPascoa();