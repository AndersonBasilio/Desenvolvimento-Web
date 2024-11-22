"use strict";
/*
// 3 Escopos: Global, Função e Bloco: var = Possui Hoisting, com let = não.

//Variável de Escopo Global.


//Função x
function x() {

    console.log('Dentro da Função: ' + serie);
 
    if (true) {
        var serie = "The Walking Dead";
    
    }
}

//Chamando a Função.
x();

//Variável do Escopo Global.
if (true) {
    console.log(serie);
}

console.log(serie); */

/*if(true){
    let serie = "Friends"
}
console.log(serie)*/

/*
var serie = "Friends";

{
    var serie = "The Walking Dead";
    console.log('Dentro do Bloco: ' + serie); //Dessa forma ocorrerá hositing os dois consoles será The Walking Dead.
}

console.log('Fora do Bloco: ' + serie); //The Walking Dead.*/

//Escopo Global.
let serie = "Friends";

//Escopo de Bloco
{
    //Let preserva o contexto, não e feito o içamento.
    let serie = "The Walking Dead";
    console.log(serie); //The Walking Dead.
}

console.log(serie); //Friends.
