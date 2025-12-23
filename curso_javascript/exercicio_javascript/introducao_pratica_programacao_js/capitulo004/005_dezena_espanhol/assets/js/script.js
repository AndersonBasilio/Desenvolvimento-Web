/*
    Peça ao usuário um número de 20 a 99.
    Mostre a palavra em espanhol para a dezena correspondente:
    20s → “veinte”, 30s → “treinta”, 40s → “cuarenta”, 50s → “cincuenta”,
    60s → “sesenta”, 70s → “setenta”, 80s → “ochenta”, 90s → “noventa”.
    Se estiver fora do intervalo, mostre “Erro”.   

*/

function solicitarInformacaoUsuario() {
    let numeroUsuario = Number(prompt('Insira um número entre 20 a 99: '));

    return numeroUsuario;
}

function escolherDezena(numero) {
    
    if(numero >= 20 && numero < 30) return 'veinte';
    if(numero >= 30 && numero < 40) return 'treinta';
    if(numero >= 40 && numero < 50) return 'cuarenta';
    if(numero >= 50 && numero < 60) return 'cincuenta';
    if(numero >= 60 && numero < 70) return 'sesenta';
    if(numero >= 70 && numero < 80) return 'setenta';
    if(numero >= 80 && numero < 90) return 'ochenta';
    if(numero >= 90 && numero < 100) return 'noventa';

    return 'Erro!';
}

function main() {
    const resultado = document.querySelector('#resultado');
    const dezenas = solicitarInformacaoUsuario();
    resultado.innerHTML = `<h3><i>${escolherDezena(dezenas)}</i></h3>`;
}

main();
