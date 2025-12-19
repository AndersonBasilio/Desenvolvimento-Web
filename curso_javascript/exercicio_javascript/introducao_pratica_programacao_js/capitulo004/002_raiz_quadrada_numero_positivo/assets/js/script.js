/*
    Peça ao usuário um número.
    Se for negativo, mostre uma mensagem dizendo que números negativos não são permitidos.
    Caso contrário, mostre a raiz quadrada do número.

*/

function solicitarUsuarioNumero(){
    let numeroUsuario = Number(prompt('Insira um número: '));

    while (isNaN(numeroUsuario)){
        alert('Insira um número válido!');
        numeroUsuario = Number(prompt('Insira um número: '));    
    }

    return numeroUsuario;
}

function raizQuadrada(numero){
    
    return Math.sqrt(numero);
}

function main(){
    let numeroCalcularRaiz = solicitarUsuarioNumero();
    let mensagem = document.querySelector('#resultado');
    
    if (numeroCalcularRaiz < 0){
        mensagem.innerHTML = '<h1> <i>Números negativos não são permitidos!</i></h1>'
    }else {
        const raiz = raizQuadrada(numeroCalcularRaiz);
        mensagem.innerHTML = '<h1> <i>Raiz Quadrada de ' +  numeroCalcularRaiz + ' é igual a ' + raiz + '.</i></h1>';
    }
}

main();