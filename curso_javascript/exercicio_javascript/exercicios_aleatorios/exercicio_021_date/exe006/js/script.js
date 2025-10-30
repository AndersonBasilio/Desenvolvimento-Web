
function solicitaNumeroUsuario(){
    let numeroUsuario = Number(prompt('Informe um número entre 1 e 5: '));
    while(numeroUsuario < 1 || numeroUsuario > 5 || isNaN(numeroUsuario)){
        alert('Número informado inválido.');
        numeroUsuario = Number(prompt('Informe um número entre 1 e 5: '));    
    }

    return numeroUsuario;    
}

function geraNumeroAleatorio(min, max){
    let numeroAleatorioGerado = Math.round(Math.random() * (max - min )) + min;
    return numeroAleatorioGerado;
}

function verificaNumero(numeroAleatorio, numeroEscolhido){
    if (numeroAleatorio === numeroEscolhido){
        return alert('Acertou!');
    } else {
       return alert(`Errou! O número era ${numeroAleatorio}. `);
    }   
}

function main(){
    let numeroEscolhido = solicitaNumeroUsuario();
    let numeroAleatorio = geraNumeroAleatorio(1, 5);
    let numeroVerificado = verificaNumero(numeroAleatorio, numeroEscolhido); 
}

main();

