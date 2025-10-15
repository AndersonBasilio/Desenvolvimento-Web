/*
   🧩 Exercício 1 — Mostrar a data atual formatada

    Crie um programa que exiba a data atual no formato:
    📅 "Dia/Mês/Ano"

    // Exemplo de saída: "08/10/2025"
    const hoje = new Date();
    // seu código aqui

    🟢 Desafio extra: mostre também o horário no formato "HH:MM:SS". 

*/

// Capturar a data para mostrar
function capturaData(){
    const dataAtual = new Date();
    return dataAtual;
}

function acresentaZero(num){ 
    return num >= 10 ? `${num}` : `0${num}`;
}

// formatar a data
function formatarData(data){
    const dia = acresentaZero(data.getDate());
    const mes = acresentaZero((data.getMonth()) + 1);
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

// Formatar o horario no formato HH:MM:SS
function formataHora(){
    const dataParaHora = capturaData();
    const hora = acresentaZero(dataParaHora.getHours()); 
    const min = acresentaZero(dataParaHora.getMinutes());
    const seg = acresentaZero(dataParaHora.getSeconds());

    return `${hora}:${min}:${seg}`;
}

// Função main
function main(){
    const dataFormatadaBr = formatarData(capturaData());
    const horaBrasil = formataHora();
    console.log(`Hoje são ${dataFormatadaBr} e as horas são ${horaBrasil} `);
}

main();