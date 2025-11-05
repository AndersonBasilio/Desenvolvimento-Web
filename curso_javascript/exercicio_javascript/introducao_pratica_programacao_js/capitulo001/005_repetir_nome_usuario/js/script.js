/*
    Escreva um programa que peça ao usuário para digitar seu nome. Em seguida, imprima o nome do usuário três vezes na mesma linha.
*/

function solicitarNome(){
    let nome = prompt('Informe seu nome: ');

    while(nome.trim() === ''){
        alert('Informe um nome correto!')
        nome = prompt('Informe seu nome: ');
    }

    return nome;
}

function exibirNomeRepetido(repeticoes){
    const resultado = document.querySelector('#resultado');
    let nomeParaRepetir = solicitarNome();
    
    resultado.innerHTML = `<h1>Seu nome repetido três vezes: ${(nomeParaRepetir + ' ').repeat(repeticoes)}</h1>`  
}

exibirNomeRepetido(3);
