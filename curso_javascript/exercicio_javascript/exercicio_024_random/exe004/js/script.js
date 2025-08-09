// Função que gera número.
function geraNumeroAleatorio(min, max){
    return Math.round(Math.random() * (max - min)) + min;    
}

// Sorteando nome em lista.
function sorteaNome(lista, indice){
    return `Nome sorteado é ${lista[indice]}.`;
}

// Função para verificar o nome.
function verficaOsbourne(nome){
    if(nome === 'Ozzy Osbourne'){
        return 'RIP OZZY!';
    }

    return;
}

// Lista de nomes
let lista = ['Anderson', 'Freddie Mercury', 'James Hetfield', 'Ozzy Osbourne', 'Brain May'];

// Atribuindo variáveis com funções.
let numero = geraNumeroAleatorio(0, lista.length - 1);
let resultado = sorteaNome(lista, numero);
let nomeSorteado = lista[numero];
let ripOzzy = verficaOsbourne(nomeSorteado);


// Imprimindo resultado no console.
console.log(resultado);

if (ripOzzy){
    console.log(ripOzzy);
}