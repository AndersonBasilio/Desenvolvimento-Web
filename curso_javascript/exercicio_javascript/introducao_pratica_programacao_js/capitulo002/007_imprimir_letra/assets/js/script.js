/*
    Escreva um programa que use um laço for para imprimir a saída abaixo:
    1. A
    2. A
    3. A
    4. A
    5. A
*/

function imprimirLetra(letra, quantidade) {
    for (let i = 1; i <= quantidade; i++) {
        console.log(`${i}. ${letra}`);
    }
}

imprimirLetra('A', 6);