"use strict";
// Paradigma de Orientação a Objetos
class Cadeira {
    //Construtor com parametros tipados
    constructor(quantidade_pernas, giratoria, cor) {
        this.quantidade_pernas = quantidade_pernas;
        this.giratoria = giratoria;
        this.cor = cor;
    }
    girarCadeira() {
        if (this.giratoria === true) {
            console.log('Girou.');
        }
        else {
            console.log('Essa cadeira não é giratória.');
        }
    }
}
let cadeira = new Cadeira(4, false, 'azul');
let cadeira2 = new Cadeira(2, true, 'verde');
console.log(cadeira);
cadeira2.girarCadeira();
