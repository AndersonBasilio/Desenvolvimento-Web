/*
    QUAL USAR
    FOR CLASSICO - Geralmente com iteráveis.(Array ou Strings)
    FOR IN - Retorna indice ou chaves(STRINGS, ARRAYS ou OBJETOS)
    FOR OF - Retorna o valor em si (ITERÁVEIS).
    

    ARRAYS -> Qualquer um dos três funciona normalmente.
        * FOR IN -> Retornará o índice
        * FOR OF -> Retornará so o valor

    Objeto não é iteravel.
    const objetoPessoa = {
        nome: 'Anderson',
        idade: 33
    };
    
    // for (let chave in objetoPessoa){
    //     console.log(chave, objetoPessoa[chave])
    // }
    
    for (let valor of objetoPessoa){
        console.log(valor, objetoPessoa[valor]);  // Objeto não é iteravel.
    }
*/

// FOR of 
//            0123456789....   (String são iteráveis)
const nome = 'Anderso Basilio';

// FOR classíco
console.log('FOR Classíco.');
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// FOR in -> Retorna a variável original
// Utilizamos a variável original mais o Índice
console.log('');
console.log('FOR in');
for(let i in nome){
    console.log(nome[i]);
}

// FOR of
// Lê a string e pega o valor, não retorna o indice.
const arrayBandas = ['Kiss', 'Queen', 'Metallica'] // Com array
console.log('');
console.log('FOR of');
for(let valor of arrayBandas){
    console.log(valor)
}

//ForEach -> recebe uma função
console.log('');
console.log('forEach')
arrayBandas.forEach( function(valor, indice, array){ // elemento seria o valor
    console.log(valor, indice, array)

});