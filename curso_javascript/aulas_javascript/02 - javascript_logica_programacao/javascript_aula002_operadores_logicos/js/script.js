/*
    Operadores Lógicos

    && -> AND - E - Todas tem que ser verdadeira, para retornar true.
    || -> OR - OU - Basta uma ser verdadeira para retornar verdadeira.
    !  -> NOT - NÃO - Operador de negação.
*/

// Ex: Verificando se tenho dinheiro no bolso e(&&) se esta sol.
// Podemos colocar em uma variavel de expressão.
//const expressaoAnd = true && true && true;


// OR Basta ter um true que retornará true
//const expressaoOr = false || false || true;


// Exemplo de uma comparação de um usuário e senha.
/*
const usuario = 'Anderson';
const senha = '123456';

//                                  true    AND             true
const logadoSistema = usuario === 'Anderson' && senha === '123456';
console.log(logadoSistema); */


// Dessa forma sera negado duas vezes retornando false
console.log(!!false)
