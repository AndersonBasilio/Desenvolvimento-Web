/*
    Operadores Aritmeticos
    + -> Adição e Concatenação
    - -> Subtração
    / -> Divisão
    * -> Mutiplicação
    ** -> Potenciação
    % -> Retorna o resto da divisão

*/

/*
    Operadores tem precedencia
    Precedencia são:
    1° -> () Parentese
    2° -> ** Potenciação
    3° -> *, / e % Multiplicação, Divisão e o resto da divisão.
    4° -> + e - Soma e subtração.

*/ 

/*
    Operador de incrementação
    ++ -> Incrementa valor na variável.
    -- -> Decrementa no valor.

*/

//Toda vez que for preciso fazer dessa forma utilizamos let.
//let contador = 1;
//contador++; //2
//contador++; //3
//contador++; //4

//Dessa maneira não é uma boa pratica.
//console.log(contador++); // Dessa forma é implementado posteriormente
//console.log(++contador); // irá incrementar o valor antes.


/*Dessa forma é a melhor pratica.
let contador = 1;
contador++
console.log(contador);*/

/*
//Dessa forma irá pular de 2 em 2.
const passo = 2;
let contador = 0;

//Forma mais simplificada.
contador += 2
//contador = contador + passo;
console.log(contador);

//contador = contador + passo;
//Forma mais simplificada.
contador += 2
console.log(contador);

//contador = contador + passo;
//Forma mais simplificada.
contador += 2
console.log(contador);

//contador = contador + passo;
//Forma mais simplificada.
contador += 2
console.log(contador);
*/

//NaN -> Significa Not a Number: Não é um numero e algum tipo de dados esta errado.
const num1 = 10;
//const num2 = '5'; // Se fosse um numero JS tentaria resolver.

//Sempre que for um número, conseguimos fazer a conversão.
//const num2 = parseInt('5'); Converte para um numero inteiro
//const num2 = parseFloat('5.2'); // Converte para float
const num2 = Number('5.2'); //Converte tanto para float quanto para inteiro.

console.log(num1 + num2);