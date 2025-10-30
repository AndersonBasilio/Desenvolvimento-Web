/*
    🧩 Exercício 3 — Quantos dias faltam para o Ano Novo

    Crie um código que calcule quantos dias faltam para o próximo dia 1º de janeiro.

    // Exemplo de saída: "Faltam 85 dias para o Ano Novo!"
    const hoje = new Date();
    // seu código aqui

    🟢 Dica: crie uma nova data com new Date(ano + 1, 0, 1).

*/
function coletaInformacoes(){
    const dataAtual = new Date();
    const dataFinal = new Date(2026, 0, 1);
    
    return {dataFinal, dataAtual};  
}

function calculaDias(){
    const {dataAtual, dataFinal} = coletaInformacoes();
    const diferencaEmMs = dataFinal - dataAtual;
    const dias = diferencaEmMs / (1000 * 60 * 60 * 24);

    return dias   
}

function main(){
    const diasCalculados = calculaDias();
    console.log(`Faltam ${Math.floor(diasCalculados)} dias para o Ano Novo!`);
}
main();
