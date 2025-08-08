"use strict";
/*let nome = "Anderson Basilio";
console.log(`Olá, ${nome}, tudo bem?`);*/
function calcular() {
    let x = Number(prompt('Informe o primeiro número: '));
    let y = Number(prompt('Informe o segundo número: '));
    return `${x} x ${y} = ${x * y}`;
}
console.log(calcular());
