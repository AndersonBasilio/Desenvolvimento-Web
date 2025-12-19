/*
    Escreva um programa que pergunte ao usuário uma linguagem de programação.
    Se ele digitar “python”, imprima:

    “Este programa foi escrito em Python.”

*/

function solicitarLinguagem() {
    let linguagem = prompt('Informe uma linguagem de programação: ');

    if (!linguagem) {
        return solicitarLinguagem();
    }

    return linguagem.toLocaleLowerCase();
}

function ePython(linguagemProgramacao){

    if(linguagemProgramacao === 'python'){
        return 'Esse programa foi escrito em Python.';

    } else {
        return 'Você escolheu a Linguagem ' + linguagemProgramacao + ', mas o programa não foi feito em Python.';
    }
}

function main(){
   let escolherLinguagem = solicitarLinguagem();
   let mensagem = ePython(escolherLinguagem);

   alert(mensagem);
}

main();