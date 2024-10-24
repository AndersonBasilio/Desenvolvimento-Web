//Função main
function main(){
    numero = receberInput();
    numero = Number(numero);
    verificaNumero = validarNumero(numero);
    document.write('<h1>Verificação Concluida Com Sucesso!</h1>');
    document.write(`<h1>${numero} é um número.</h1>`);
}

//Receber um número do usuário
function receberInput(){
    let numero = prompt('Digite um número: ');
    return Number(numero);
}

//Verificar se é um número
function validarNumero(numero){
    if(isNaN(numero)){
        while(isNaN(numero) || numero.trim() === ''){
           numero = prompt('Valor incorreto, por favor Digite um número: ');
        }
        alert('Informação correta.');
    }
    
    return Number(numero);
}


main()