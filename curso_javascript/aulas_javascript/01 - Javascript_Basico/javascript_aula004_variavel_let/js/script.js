/*
    Regras para declaração de variáveis.
    - Não podemos criar variáveis com palavras reservadas.
    - Variáveis precisam ter nomes significativos
    - Não pode começar o nome de variável com número
    - Não pode conter espaço ou traços, utiliza camelCase
    - Case-sensitive letras maiúsculas fazem diferença.
    - Não utilize VAR, UTILIZAR LET
*/

let nome1 // Podemos inicializar uma variável e não inicializar ela.
nome1 = 'Anderson' //Inicializamos a variável.
console.log(nome1);

let nome = 'Anderson Basilio';
console.log(`${nome} nasceu em 1984.`);
console.log(`Em 2000 ${nome} conheceu Maria.`);
console.log(`${nome} casou-se com Maria em 2012.`);
console.log(`Maria teve um filho com ${nome} em 2015.`);
console.log(`O filho de ${nome} se chama Eduardo.`)