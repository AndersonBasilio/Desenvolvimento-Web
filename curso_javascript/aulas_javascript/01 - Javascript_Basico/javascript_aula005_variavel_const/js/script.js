/*
    Regras para declaração de variáveis constates.
    - Não podemos criar variáveis constantes com palavras reservadas.
    - Variáveis precisam ter nomes significativos
    - Não pode começar o nome de variável com número
    - Não pode conter espaço ou traços, utiliza camelCase
    - Case-sensitive letras maiúsculas fazem diferença.
    - Não podemos modifcar valores de uma constante.
    - Não utilize VAR, UTILIZAR LET
*/
//ATENÇÃO!!! Para saber os atalhos verificamos em configração, clicar em Keyboard shortcuts
// Javascript é um valor de tipagem dinamica.
//const nome = 'Anderson Basilio';

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5 //Alterando o valor da variavel resultadoTriplicado
/*console.log('Resultado ' + resultado + ' e ' + ' resultado dulplicado: ' +  resultadoDuplicado + ' Resultado Triplicado ' + resultadoTriplicado);*/
console.log(typeof(primeiroNumero)); // Saber o tipo do dado
