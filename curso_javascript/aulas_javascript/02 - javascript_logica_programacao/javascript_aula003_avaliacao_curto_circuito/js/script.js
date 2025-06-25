/*
    Operadores Lógicos
    && - AND -> Todas expressões tem que ser verdadeiro.
    Ex curto circuito:

        && -> false && true -> Quando aparece um false para a checagem por ali, retorna o valor mesmo.
    || - OR -> Basta uma ser verdadeira que ira retornar o valor verdadeiro.

    Valores FALSY
    false -> Literal
    0 -> Numeral zero
    '', "" e `` -> String vazia
    null 
    undefined -> Não aponta em lugar algum.
    NaN

*/

//console.log('Anderson' && 0 && 'Maria'); Retornará o valor 0.
//console.log('Anderson' && true && NaN); Retornará o valor NaN.
//console.log('Anderson' && true && 'Maria'); // Retornará o ultimo valor.

// Fazendo desvio de fluxo utilizando AND
/*
function falaOi(){
    return 'Oi!';
}

let vaiExecutar = 'Metallica';

console.log(vaiExecutar && falaOi());*/

// Utilizando curto circuito || (OR)
//console.log(0 || false || null || 'Anderson' || true); //Precisa de apenas uma expressão true retorna a primeira.

/*
const corUsuario = 'Vermelho'; // É avaliado como verdadeiro.
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);*/

const a = 0; 
const b = null;
const c = false;
const d = 'false'; // É uma string
const e = NaN;

console.log(a || b || 'Metallica' || c || d || e); // Retorna o primeiro valor verdadeiro



