function geraNumeroAleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

let numeroGerado = geraNumeroAleatorio(1, 10);

console.log(numeroGerado);