/*
    Escreva um programa que faça o seguinte cálculo em Python:

    (9 + 3) / (8 - 2)
*/

class RealizarCalculo {
    constructor(resultado){
        this.resultado = resultado
    }
    
    calcular(){
        this.resultado = (9 + 3) / (8 - 2)
        return this.resultado;
    }

    mostrarResultado(){
        let exibirResultado = document.querySelector('#resultado');
        exibirResultado.innerHTML =  `<h3><i>Resultado da Expressão</h3>(9 + 3 ) / (8 - 2) = ${this.resultado}</i>`;
    }
}


const expressao = new RealizarCalculo();
expressao.calcular();
expressao.mostrarResultado();