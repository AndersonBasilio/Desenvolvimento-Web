/*
     Escreva um programa que peça ao usuário para inserir dois números (você provavelmente usará duas instruções input separadas). Depois, imprima o resultado da soma desses dois números.
*/

// Solicitar ao usuários números.
function solicitarNumero(){
     let numero = prompt('Informe um número: ');

     while(isNaN(numero) || numero.trim() === ''){
          alert('Por favor, informe apenas números.');
          numero = prompt('Informe o número: ');
     }

     return Number(numero);
}

function escolherOperadores(){
     let operadores = prompt('Informe um operador soma(+) ou subtração(-) : ');

     while(operadores.trim() === '' || (operadores !== '+' && operadores !== '-')){
          alert('Operador Inválido. Por favor, informe apenas um operador.');
          operadores = prompt('Informe um operador soma(+) ou subtração(-) : ');
     }

     return operadores;
}

// Somar os dois números.
function resultadoConta(){
     const resultado = document.querySelector('#exibirResultado');
     const num1 = solicitarNumero();
     const num2 = solicitarNumero();
     const operador = escolherOperadores();

     if(operador === '-') resultado.innerHTML = `<h1>${num1} - ${num2} = ${num1 - num2}</h1>`;
     if(operador === '+') resultado.innerHTML = `<h1>${num1} + ${num2} = ${num1 + num2}</h1>`;

}

resultadoConta();