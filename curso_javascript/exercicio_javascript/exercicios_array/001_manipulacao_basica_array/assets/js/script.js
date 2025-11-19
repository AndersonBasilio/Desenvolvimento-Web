/*
    Crie uma função que recebe um array de números e retorna um novo array onde cada número é multiplicado por 2.    
*/

function recebendoElementosDoUsuario(array){ 
    for(let i = 1; i <= 4; i++){
        let numeros = Number(prompt('Insira o ' + i + '° número: '));

        while(isNaN(numeros)){
            alert('Por favor, insira apenas números!');
            numeros = Number(prompt('Insira o ' + i + '° número: '));
        } 
        
        array.push(numeros);
    }

    return array;
}

function dobrarLista(listaOrignal) {
    let listaDobrada = [];

    for (let numeros of listaOrignal){
        listaDobrada.push(numeros * 2);
    } 

    return listaDobrada;
}

function main(){
    let listaOriginal = [];
    listaOriginal = recebendoElementosDoUsuario(listaOriginal);

    let copiaOriginal = [...listaOriginal];
    let listaDobrada = dobrarLista(listaOriginal);
    let resultado = document.querySelector('#resultado');

    resultado.innerHTML += `<h3><i>Lista Original: [${listaOriginal.join(', ')}]</i></h3>`
    resultado.innerHTML += `<h3><i>Lista Dobrada: [${listaDobrada.join(', ')}]</i></h3>`
}

main();