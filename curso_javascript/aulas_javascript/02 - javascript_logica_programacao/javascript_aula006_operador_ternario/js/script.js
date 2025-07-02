//Operador Ternario (condição ? 'Valor para verdadeiro' : 'Valor para faslo';)

const pontuacaoUsuario = 9999;

// Colocando a operação ternaria em uma variavel.
const nivelUsuario  = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário NORMAL.';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Se o usuário não escolher uma cor será preta por padrao
console.log(nivelUsuario, corPadrao);


