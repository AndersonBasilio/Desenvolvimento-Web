/*
    Escreva um programa que use um laço for para imprimir 29, 28, 27, ..., 5, 4, todos na mesma linha separados por espaços.
*/

class ImprimirNumeroOrdemDecrescente {

    exibirOrdemDecrecente() {
        let numero = 29;
        let listaNumeroEmOrdem = [];

        for (let i = numero; i >= 4; i--) {
            listaNumeroEmOrdem.push(i);
        }

        console.log(listaNumeroEmOrdem.join(' '));
    }
}


let mostrarNumerosOrdemDescrecente = new ImprimirNumeroOrdemDecrescente();
mostrarNumerosOrdemDescrecente.exibirOrdemDecrecente();