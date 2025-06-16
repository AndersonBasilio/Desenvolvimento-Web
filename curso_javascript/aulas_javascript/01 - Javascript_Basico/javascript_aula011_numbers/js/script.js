//Em javascript tem algumas imprecisão nos números.

let num1 = 0.7; //number
let num2 = 0.1; //number

//suponhamos que queremos chegar a 1.
//num1 += num2 // num1 = num1 + num2 = 0.8
//num1 += num2 // num1 = num1 + num2 = 0.9
//num1 += num2 // num1 = num1 + num2 = 1.0

//Podemos corrigir usando toFixed() MELHOR MANEIRA
//num1 = num1.toFixed(2);// Dessa forma irá retornar false a verificação se é inteiro.
//num1 = parseFloat(num1.toFixed(2));

//Corrigindo fazendo contas.
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1); //0.9999999999999999
console.log(Number.isInteger(num1))// Não será um número inteiro



// Para concatenar um numero sem fazer conta fazemos dessa forma.
//toString "Converte o número para string." dessa forma a variavel não muda so retorna um valor
//console.log(num1.toString() + num2);// Convertendo para String.
//num1 = num1.toString();//Dessa forma o num1 será alterado.
//console.log(typeof(num1)) // Retorna Number

//console.log(num1.toString(2))//retornará número binario

//console.log(num1.toFixed(2));//Arredondamos o numero para cima, dessa forma não alteramos o valor real

//Para sabermos se o número é inteiro.
//console.log(Number.isInteger(num1));// irá retornar true ou false (se for inteiro é true se for flutuante é false).

//let temp = num1 * 'Olá';
//console.log(Number.isNaN(temp)); // Se for NaN retorna true se nao retorna false.

//         0.7   + 0.1 
//console.log(num1 + num2)// Resultado terá uma certa imprecissão 0.7999999999999999

