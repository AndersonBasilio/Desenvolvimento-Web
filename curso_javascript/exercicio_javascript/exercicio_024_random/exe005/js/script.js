/*
    🧠 Exercício 5 – Maior de 3 números aleatórios
    Gere 3 números aleatórios entre 1 e 100 e diga qual é o maior entre eles.

    javascript
    Copiar
    Editar
    // Ex: Números: 24, 89, 77 → Maior: 89
*/

// Função para Gerar números aleatório.
function gerarNumeroAleatorio(min, max, quantidade){

    let listaNumeros = [];
    for(let i = 0; i < quantidade; i++){
        let numeroAleratorio = Math.floor(Math.random() * (max - min + 1)) + min;      
        listaNumeros.push(numeroAleratorio);
    } 
    return listaNumeros;   
}


// Verifica qual número em lista é maior.
function verificaNumeroMaior(listaNumeros){
    return Math.max(...listaNumeros);
}

// Função main.
function main(){
    let numerosGerado = gerarNumeroAleatorio(1, 100, 3);
    let maior = verificaNumeroMaior(numerosGerado);

    console.log(`Numeros que foram gerados foram: ${numerosGerado.join(", ")}`);
    console.log(`O maior número entre eles é ${maior}.`)
    
}

main();