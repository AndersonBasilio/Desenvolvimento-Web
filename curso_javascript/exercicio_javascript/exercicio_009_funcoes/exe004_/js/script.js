//Exercício 4: Tabuada

//Crie uma função chamada "tabuada" que recebe um número como parâmetro e retorna a tabuada desse número de 1 a 10.

//Logica
    //Obter número do usuário, verificar os erros possiveis

function main(){
    let numero = obterNumero();
    tabuada(numero);

}

function pedirNumero(mensagem){
    let numero;
    do {
        numero = Number(prompt(mensagem));
        if(isNaN(numero)){
            alert('Digite um número válido.');
        } 
    } while(isNaN(numero));
        return numero;
}

function obterNumero(){
    return pedirNumero('Informe um numero para saber a tabuada: ');
}

//Tabuada
function tabuada(numero){
    document.write(`<h1>Tabuada ${numero}</h1>`)
    for(contador = 1; contador <= 10; contador++){
        document.write(`${contador} x ${numero} = ${contador*numero}<br>`);
    }
}

main()