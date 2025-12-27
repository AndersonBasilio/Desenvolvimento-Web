/*
    Peça um número.
    Se não for 0, 2, 5 ou estiver entre 10–15 ou 20–25, mostre “Ok”.
    Caso contrário, não mostre nada.
*/

// Solicitar número
function solicitarInformacao() {
    let numeroUsuario = Number(prompt('Por favor insira um número: '));

    while(isNaN(numeroUsuario)){
        alert('Insira um número válido por favor.');
        numeroUsuario = Number(prompt('Por favor insira um número: '));
    }

    return numeroUsuario;
}


// Verificar
    // Se for 0, 2, 5 ou estiver entre 10 - 15 ou 20 - 25, mostrar OK

function verificarNumero(numero){
    if (
        numero !== 0 &&
        numero !== 2 &&
        numero !== 5 &&
        !(numero >= 10 && numero <= 15) &&
        !(numero >= 20 && numero <= 25)
    ) {
        return 'OK!';
    } 
}

function main(){
    const numUsuario = solicitarInformacao();
    const verifica = verificarNumero(numUsuario);
    const resultado = document.querySelector('#resultado');

    if(verifica === undefined){
        return;
    }

    resultado.innerHTML = `${verifica}`;  
}

main();