/*
Primitivos - String, Number, Boolean, Undefined, Null (Bigint, Symbol) - Não podemos modificar
valores copiados

*/

//Dessa forma não alteramos o nome só mudamos o valor primitivo.
//let nome = 'Anderson';
// string são indexada
//      012345678
//nome = 'Metallica';
//console.log(nome);

//Podemos exibir o indice dessa forma, quanto para array quanto para string.
//Diferença: No array pegamos o elemento na string pegamos a letra.(string é imutavel.)
//console.log(nome[1]);

//Irá receber o mesmo valor, ambas são independente.
//let a = 'A';
//let b = a; //Cópia

//console.log(a, b);

//Não afeta o valor de (b)
//a = 'Outra coisa';
//console.log(a, b);

/*
Referencia (mutável) - array, object e function - valores por referência.

*/
//Apontam para o mesmo valor na memoria.
//Se alteramos o valor de "a" alteramos as duas variaveis.
/*let a = [1, 2, 3];
let b = [...a]; // Para copiar o valor de a para dentro de B fazemos dessa forma, valor de b e indenpente.
let c = b;

console.log(`A = ${a}, B = ${b}`);

//Colocando um dado a mais em a, aponta para o mesmo valor.
a.push(4)
console.log(`A = ${a}, B = ${b}`);

//Removendo o valor, será removido dos dois valores.
b.pop();
console.log(`A = ${a}, B = ${b}`);

a.push(' Anderson')
console.log(`A = ${a}, B = ${b}, C = ${c}`);*/

// valores são passados por referencia, entao esta apontando para o mesmo valor


const a = {
    nome: 'Anderson',
    sobrenome: 'Basilio'
};

const b = {...a};// Se quisermos copiar o valor e tornar independente fazemos dessa forma.
a.nome = 'João';
console.log(a);
console.log(b);