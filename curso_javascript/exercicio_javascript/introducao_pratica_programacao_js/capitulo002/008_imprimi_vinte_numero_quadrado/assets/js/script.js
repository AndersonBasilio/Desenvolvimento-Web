/*
    Escreva um programa que use um laço for para imprimir os 20 primeiros quadrados perfeitos, todos na mesma linha. Os primeiros são: 1, 4, 9, 16, 25, ...

*/

function imprimirNumerosQuadrados() {
    let listaQuadrado = [];
    for (let i = 1; i <= 20; i++) {
        listaQuadrado.push(i ** 2);
    }

    console.log(...listaQuadrado);
}

imprimirNumerosQuadrados();