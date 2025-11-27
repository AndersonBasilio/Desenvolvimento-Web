/*
    1. Contagem de 1 a 10
    Escreva um programa que use while para imprimir os números de 1 a 10.
*/

function contagemUmDez(min, max){
    let contador = min;
    const lista = [];
    while(contador <= max){
        lista.push(contador);
        contador++;
    }

    console.log(lista.join(" "))
}

contagemUmDez(1, 10);