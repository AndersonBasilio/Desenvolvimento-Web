"use strict";
/*let nome = "Anderson Basilio";
console.log(`Olá, ${nome}, tudo bem?`);*/
function calcular(){
    let x = Number(prompt('Informe o primeiro número: '));
    let y = Number(prompt('Informe o segundo número: '));
    
    while(isNaN(x) || isNaN(y)){
        if(isNaN(x)){
            alert('O primeiro valor não é um número, favor inserir um número válido.');
            x = Number(prompt('Informe o primeiro número: '));
        } else if(isNaN(y)){
            alert('O segundo valor não é um número, favor inserir um número válido.');
            y = Number(prompt('Informe o primeiro número: '));
        }   
    }
    alert('Iniciando o Calculo...')
    return `${x} x ${y} = ${x * y}`;
}
document.write(calcular());
