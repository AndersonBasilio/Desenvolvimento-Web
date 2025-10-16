/*
    1. Gerar vários números e retornar todos
    Crie uma função gerarListaAleatoria(min, max, qtd) que:

    Gera qtd números aleatórios entre min e max.

    Armazena todos os números em um array.

    Retorna o array completo.

*/

// Crie uma função gerarListaAleatoria(min, max, qtd) que:
function gerarListaAleatoria(min, max, quantidade){
    
    let listaNumeros = [];
    for(let i = 0; i < quantidade; i++){
        let numerosGerados = Math.floor(Math.random() * (max - min + 1) + max);

        //Armazena todos os números em um array
        listaNumeros.push(numerosGerados);
        
    }
    // Retorna o array completo.
    return listaNumeros;
}

// Mostrando array completo.
console.log(gerarListaAleatoria(1, 1000, 3));