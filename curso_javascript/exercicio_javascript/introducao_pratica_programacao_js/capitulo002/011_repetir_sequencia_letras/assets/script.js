/*
    Escreva um programa que use exatamente três laços for para imprimir o seguinte:

    AAAAAAAAAABCDBCDBCDBCDBCDEFFFFFFFFFFFFFFF
 
*/

// Função para imprimir sequência de letras.
function imprimirSequencia() {
    let resultado = '';

    // Primeira sequência (AAAAAAAAAA)
    for (let i = 1; i <= 10; i++) {
        resultado += 'A';

    }

    // Segunda sequência (CDBCDBCDBCDBCD)
    for (let j = 1; j <= 5; j++) {
        resultado += 'BCD';

    }

    // Terceira sequência
    for (let k = 1; k <= 16; k++) {
        if(k === 1){
            resultado += 'E';   
        }else{
            resultado += 'F'
        }   
    }

    // Mostra o resultado da sequência.
    console.log(resultado);

}

// Chamando a função.
imprimirSequencia()