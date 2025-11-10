/*
    Escreva um programa que use um laço for para imprimir 2, 6, 10, 14, 18, ..., 98, 102, todos na mesma linha separados por espaços.  

*/

class ImprimirNumerosPares {
    constructor(numero){
        this.numero = numero;
    }

    imprimiNumeros(numeros){
        let salto = 4;
        let exibirNumeros = [];

        for(let i = 2; i <= 102; i += salto){
         exibirNumeros.push(i);               

        }
        console.log(exibirNumeros.join(' '));
    }
}

let mostrarNumeros = new ImprimirNumerosPares();
mostrarNumeros.imprimiNumeros();