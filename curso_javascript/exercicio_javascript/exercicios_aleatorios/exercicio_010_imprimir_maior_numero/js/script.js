/*
    Faça um Programa que peça dois números e imprima o maior deles.
*/

function main(){
    let resposta = document.querySelector('.resultado');
    let [primeiroNumero, segundoNumero] = obterNumeros();
    let maior =  confereNumeros(primeiroNumero, segundoNumero);

    resposta.innerHTML += `Maior número digitado foi ${maior}.`
}

function obterNumeros(){
    let primeiroNumero;
    let segundoNumero;
    do {
        primeiroNumero = Number(prompt('Informe o primeiro número: '));
        segundoNumero = Number(prompt('Informe o segundo número: '));
        if((isNaN(primeiroNumero) || isNaN(segundoNumero)) || primeiroNumero === 0 || segundoNumero  === 0 || primeiroNumero === segundoNumero){
            alert('Informe os valores corretamente, não podendo ser iguais ou zero.');
        }
    } while((isNaN(primeiroNumero) || isNaN(segundoNumero)) || primeiroNumero === 0 || segundoNumero  === 0 || primeiroNumero === segundoNumero);
    
    return [primeiroNumero, segundoNumero];
}

function confereNumeros(primeiroNumero, segundoNumero){
    let maior
    if(primeiroNumero > segundoNumero){
        maior = primeiroNumero;
    }else {
       maior = segundoNumero;
    }
    return maior;
    
}

main();