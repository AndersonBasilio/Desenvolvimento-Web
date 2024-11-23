"use strict";
//Arrow Function
/*
let calcularQuadrado = function(x: number){
    return `Quadrado do número ${x} é ${x * x}`;
}*/
/*let calcularQuadrado = (x:number) => {
    return `Quadrado do número ${x} é ${x * x}`
}*/
//Se não estiver recebendo nenhum parâmetro
/*let calcularQuadrado = (x:number) => {
    return `Quadrado do número ${x} é ${x * x}`
}*/
//let calcularQuadrado = (x:number) => `Quadrado do número ${x} é ${x * x}` //Return implícito.
//Função para verificar se um número é par ou impar.
/*let parOuImpar = function(numero:number){
    if(numero  % 2 === 0){
        return `${numero} é Par`;
    }else{
        return `${numero} é Impar`;
    }
}*/
/*
let parOuImpar = (numero:number) =>{
    if(numero % 2 === 0){
        return `${numero} PAR`
    }else{
        return `${numero}  IMPAR`
    }
}*/
let parOuImpar = (numero) => numero % 2 === 0 ? `${numero} PAR` : `${numero}  IMPAR`; // Retorno Implícito.
document.write(parOuImpar(21));
