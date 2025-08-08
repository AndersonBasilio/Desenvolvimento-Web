// Função irá retornar numero aleatório.
function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função irá verificar se o número é par ou impar.
function verificaNumeroImparPar(numero){
    let parOuImpar = numero % 2 === 0 ? `É Par` : `É Impar`;
    return parOuImpar;
}

// Atribuindo o as funções em uma variável.
let numeroGerado = gerarNumeroAleatorio(1, 100);
let resultado = verificaNumeroImparPar(numeroGerado);

// Mostrando mensagem no console.
console.log(`Número gerado foi ${numeroGerado}. ${resultado}.`);