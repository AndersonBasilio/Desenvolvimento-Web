/*
    Escreva um programa que peça ao usuário para inserir um número. Armazene esse número em uma variável.
    Adicione 2 a esse número, armazene o resultado na mesma variável e, em seguida, imprima o valor final. 
*/

function solicitarNumeroUsuario() {
    try {
        let numero = prompt('Insira um número: ');

        if (numero.trim() === '' || isNaN(numero)) {
            throw new Error('Valor inválido.');
        }

        numero = Number(numero);

        return numero + 2;

    } catch (erro) {
        alert('Insira um valor valido, apenas números.');

        return solicitarNumeroUsuario();
    }
}

function main(){
   alert('Resultado final é ' + solicitarNumeroUsuario() + '.');
}

main();