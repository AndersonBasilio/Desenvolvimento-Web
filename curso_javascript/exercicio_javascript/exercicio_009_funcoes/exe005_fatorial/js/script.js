//Exercício 5: Fatorial

//Crie uma função chamada "fatorial" que recebe um número como parâmetro e retorna o fatorial desse número.

function main(){
   let numero = obterNumero();
   let fatorial = fatorarNumero(numero);
   
}

//Pedir número para usuário
function pedirNumeroUsuario(mensagem){
    let numero;
    do {
        numero = Number(prompt(mensagem));
        if(isNaN(numero)){
            alert('Digite um número válido.');
        }
    } while(isNaN(numero));
    return numero;
}

//Função para obter número
function obterNumero(){
    do {
        numero = pedirNumeroUsuario('Informe um número para ser fatorado: ');
        if(numero < 0 || numero > 20){
            alert('Número inválido. Informe um número entre 0 e 20.');
        }
    } while(numero < 0 || numero > 20);
    return numero;
}

//fatorar número
function fatorarNumero(numero){    
    fatorial = 1
    for(contador = numero; contador >= 1; contador--){
        fatorial = fatorial * contador;
    }
    return alert(`${numero}! = ${fatorial}`);
    
}


//Chamando a função principal
main();