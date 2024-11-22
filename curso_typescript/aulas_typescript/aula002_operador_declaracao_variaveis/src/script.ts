//Constante Serie.
const SERIE = "Friends";

//Função.
function x(){
    //Não irá interverir na constante dentro da função.
    const SERIE = "The Walking Dead."
    console.log('Dentro da Função: ' + SERIE);
}

//Chamando a função.
x();

//Console no escopo global.
console.log('Escopo Global: ' + SERIE)