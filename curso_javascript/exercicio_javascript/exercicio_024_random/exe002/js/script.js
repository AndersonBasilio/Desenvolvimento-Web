
// Solicita número ao usuário.
function solicitaNumeroUsuario(){
    let numeroUsuario = Number(prompt('Informe um número entre 1 e 5: '));
    while(numeroUsuario < 1 || numeroUsuario > 5 || isNaN(numeroUsuario)){
        alert('Número informado inválido.');
        numeroUsuario = Number(prompt('Informe um número entre 1 e 5: '));    
    }

    return numeroUsuario;    
}

// Gera número aleatório.
function geraNumeroAleatorio(min, max){
    let numeroAleatorioGerado = Math.round(Math.random() * (max - min )) + min;
    return numeroAleatorioGerado;
}

// Verifica se o numero informado pelo usuárui é igual ao numero aleatório.
function verificaNumero(numeroAleatorio, numeroEscolhido){
    if (numeroAleatorio === numeroEscolhido){
        return alert('Acertou!');
    } else {
       return alert(`Errou! O número era ${numeroAleatorio}.`);
    }   
}

// Função main() 
function main(){
    let numeroEscolhido = solicitaNumeroUsuario();
    let numeroAleatorio = geraNumeroAleatorio(1, 5);
    let numeroVerificado = verificaNumero(numeroAleatorio, numeroEscolhido); 
}

// Chamando a função main.
main();

