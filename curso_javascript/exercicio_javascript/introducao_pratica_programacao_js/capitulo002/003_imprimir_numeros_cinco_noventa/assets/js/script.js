/*
    Escreva um programa que use um laço for para imprimir os números 5, 6, 7, 8, ..., 89, 90, todos na mesma linha, separados por espaços.
*/

class Numeros{
    
    contagemNumeros(){

        let listaNumeros = [];
        for(let i = 5; i <= 90; i++){
            listaNumeros.push(i);
        }

        console.log(listaNumeros.join(' '));

    }
}

const exibirNumeros = new Numeros();
exibirNumeros.contagemNumeros();