/*
    Escreva um programa que use laços for para imprimir 40 letras A seguidas de 50 letras B, tudo na mesma linha.
*/

function imprimrLetras(quantidadeA, quantidadeB) {
    let resultado = '';
   
    for (let i = 1; i <= quantidadeA; i++) {
        resultado += 'A';
    }
    
    for(let j = 1; j < quantidadeB; j++){
        resultado += 'B';
    }
    console.log(resultado);
}

imprimrLetras(40, 50);
