/*
    Escreva um programa que use um laço for para imprimir ABCABCABC..., com 100 repetições de “ABC” na mesma linha.
*/

function imprimirABC(quantidade){
    let resultado = '';

    for(let i = 1; i <= quantidade; i++){
        resultado += 'ABC'
    }

    console.log(resultado); 
}

imprimirABC(100);