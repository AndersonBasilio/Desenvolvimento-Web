/*
function calcularArea (largura, comprimento){
    var areaTotal = largura * comprimento;
    return areaTotal;

}

var largura = prompt('Informe a Largura do terreno: ');
var comprimento = prompt('Informe o comprimento do terreno: ');

largura = parseFloat(largura);
comprimento = parseFloat(comprimento);

calcularArea(largura, comprimento);

document.write('A area total do terreno é de ' + calcularArea(largura, comprimento) + ' metros quadrados.');

*/

function soma(a, b){
    b = b === undefined ? 0 : b;
    return a + b
}

console.log(soma(7, 7));
console.log(soma(7, 7, 9, 15)) // Desconsidera os parâmetros adicionais
console.log(soma(7))