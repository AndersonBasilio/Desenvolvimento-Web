/*
    Escreva um programa que gere e imprima 10 números aleatórios contendo apenas 0s e 1s na mesma linha, sem espaços.
    Na linha seguinte, gere 11 números, depois 12, e assim por diante até 50 linhas no total.
    As primeiras linhas podem parecer assim:

    1000110101  
    11100100101  
    110101000100  
    0010010001000

    [Dica: use um laço for dentro de outro (nested loop).]

*/

function geraLinhasNumeroBianarioAleatorio() {
    for (let linha = 1; linha <= 50; linha++) {
        let repetir = '';

        for (let contador = 0; contador < 10 + linha; contador++) {
            let binarioAleatorio = String(Math.floor(Math.random() * 2));
            repetir += binarioAleatorio;
        }

        console.log(repetir);
    }
}

geraLinhasNumeroBianarioAleatorio();