/*
    🧩 Exercício 4 — Diferença entre duas datas

    Crie um programa que receba duas datas e mostre a diferença em dias entre elas.

    // Exemplo de saída: "A diferença é de 15 dias."
    const data1 = new Date('2025-10-01');
    const data2 = new Date('2025-10-16');
    // seu código aqui


    🟢 Dica: subtraia as datas (data2 - data1) e divida por (1000 * 60 * 60 * 24).

*/


// Pegar a primeira data.

// let dataUsuario1 = document.querySelector('#primeiraData').replace(/\//g, '-');
// let data1 = new Date(dataUsuario1);
// console.log(data1);


// pegar a segunda data.
let dataUsuario2 = '2025/12/04'.replaceAll('/', '-');
const data2 = new Date(dataUsuario2);

// calcular a diferença das datas
//const calcularDiferenca = (data2 - data1) / (1000 * 60 * 60 * 24);

//console.log(`A diferença são de ${Math.floor(calcularDiferenca)} dias.`);

function cliqueVerificar(){
    let dataUsuario1 = document.querySelector('#primeiraData').value;
    let umDia = 60 * 60 * 24 * 1000;
    let dataFormatada = data1.getTime() + umDia;
    let data1 = new Date(dataFormatada);
    
    alert(data1.toLocaleDateString('pt-BR'));
}