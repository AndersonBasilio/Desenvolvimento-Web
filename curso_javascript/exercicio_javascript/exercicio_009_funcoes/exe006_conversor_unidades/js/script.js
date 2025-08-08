/*
Exercício 6: Conversão de Unidades

Crie uma função chamada "converteUnidades" que recebe um valor e uma unidade (km, m, cm, mm) como parâmetros e retorna o valor convertido para as outras unidades.

*/

// Função Principal
function main(){
    let numero = obterValorNumerico();
    let unidade = obterUnidade();
    let unidadeParaConverter = obterUnidadeDeConversao();
    let valorConvertido = converterDados(numero, unidade, unidadeParaConverter);
    exibirResultado(numero, unidade, valorConvertido, unidadeParaConverter);    
}

// Obter unidades para serem convertidas.
function obterValorNumerico(){
    let valorNumerico;
    do {
        valorNumerico = Number(prompt('Informe um valor para ser convertido: '));
        if(isNaN(valorNumerico)){
            alert('Informe um valor válido, por favor!');
        }
    } while(isNaN(valorNumerico));
    return valorNumerico;
}

// Função irá obter unidade
function obterUnidade(){
    let unidade  = ''
    do {
        unidade = prompt('Informe a unidade do valor fornecido: [KM, M, CM, MM]: ').toLowerCase();
        if(unidade !== 'km' && unidade !== 'm' && unidade !== 'cm' && unidade !== 'mm'){
            alert('Informe uma unidade correta.');
        }
    }while(unidade !== 'km' && unidade !== 'm' && unidade !== 'cm' && unidade !== 'mm');
    return unidade;
}

// Função Para Obter unidade para converter
function obterUnidadeDeConversao(){
    let unidade = '';
    do {
        unidade = prompt('Informe a unidade que deseja converter: ').toLowerCase();
        if(unidade !== 'km' && unidade !== 'm' && unidade !== 'cm' && unidade !== 'mm'){
            alert('Informe uma unidade correta.');
        }
        }while(unidade !== 'km' && unidade !== 'm' && unidade !== 'cm' && unidade !== 'mm');
        return unidade;   
}

// Função irá converter os dados
function converterDados(valor, unidadeOrigem, unidadeDestino){
    const conversao = {
        km: { m: 1000, cm: 100000, mm: 1000000 },
        m: { km: 0.001, cm: 100, mm: 1000 },
        cm: { km: 0.00001, m: 0.01, mm: 10 },
        mm: { km: 0.000001, m: 0.001, cm: 0.1 }
    }
    let valorConvertido = valor * conversao[unidadeOrigem][unidadeDestino];
    return valorConvertido;
}

//Função irá imprimir as informações 
function exibirResultado(valorOriginal, unidadeOrigem, valorConvertido, unidadeDestino){
    alert(`Valor informado: ${valorOriginal}${unidadeOrigem}.\nValor convertido: ${valorConvertido}${unidadeDestino}.`);
}

//Chamando a função main
main();