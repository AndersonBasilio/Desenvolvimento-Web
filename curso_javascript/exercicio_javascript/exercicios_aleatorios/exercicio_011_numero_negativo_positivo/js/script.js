/*
    Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
*/

// Função Principal
function main(){
   let numero = obterNumero();
   verificaNumeroPositivoNegativo(numero);

}

// Pegar número informado pelo usuário.
function obterNumero(valor){
    do{
        valor = Number(prompt('Informe um número: '));
        if(isNaN(valor)){
            alert('Informe um número, por favor!'); 
        } else if(valor === 0){
            alert('O número não pode ser zero ou vazio. Tente novamente.')
        }
    }while(isNaN(valor) || valor === 0);
    return valor;
}

// Função para verificar se o numero é positivo ou negativo.
function verificaNumeroPositivoNegativo(valor){
    let mensagem = valor < 0 ? 'Número Negativo.' : 'Numero Positivo.' 
    document.body.innerHTML += `<p>${mensagem}</p>`; -2
    
}

// Chamando a função principal.
main();