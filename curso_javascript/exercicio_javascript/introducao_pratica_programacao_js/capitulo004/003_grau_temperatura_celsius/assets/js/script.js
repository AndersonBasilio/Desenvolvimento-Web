/*
    Peça uma temperatura em Celsius:
    Se ≤ 0: mostre “Aviso: temperatura baixa.”
    Se entre 0 e 35: mostre “Temperatura adequada.”
    Caso contrário: “Aviso: temperatura alta.”
*/

function solicitarTemperaturaCelsius(){
    let temperatura = Number(prompt('Insira uma temperatura em Celsius: '));
    
    while(isNaN(temperatura)){
        alert('Insira uma temperatura em Celsius válida.');
        temperatura = Number(prompt('Insira uma temperatura em Celsius: '));
    }  

    return temperatura;
}

function verificaTemperatura(temp){
    if(temp <= 0) return 'Aviso: Temperatura Baixa.';
    if(temp > 0 && temp <= 35) return 'Temperatura adequada';
    if(temp > 35) return 'Aviso: Temperatura alta.'
}

function main(){
    const mostrarResultado = document.querySelector('#resultado');

    let temperaturaCelsius = solicitarTemperaturaCelsius();
    mostrarResultado.innerHTML = `<h3><i>${verificaTemperatura(temperaturaCelsius)}</h3></i>`;
}

main();
