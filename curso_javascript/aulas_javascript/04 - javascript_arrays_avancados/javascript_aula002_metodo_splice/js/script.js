//              0        1       2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3 );

// Removendo o útlimo elemento
// Removendo o indice no final do array.
// Retorna o array do elemento apagado.
//let removidos = nomes.splice(3, 2);

// Utilizando números negativos, indices negativos começam da direita para esquerda.
// Negativos     -5       -4      -3         -2         -1 
// Positivo       0        1       2          3          4
//const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
//let removidos = nomes.splice(-2, 2);


// Se quisermos remover até o fim do array utilizamos também o Number.MAX_VALUE
// Number.MAX_VALUE é o maior número que existe no JS.
//let removidos = nomes.splice(-2, Number.MAX_VALUE);


// Para não remover nenhum elemento.
// Podemos enviar coisas a serem adicionadas no indice que desejamos.
// Adiciona elemento no índice que foi passado
//let removidos = nomes.splice(3, 0, 'Anderson');

// Para remover o elemento e adicionar.
// Removendo dois nomes.
// let removidos = nomes.splice(3, 2, 'Anderson');


// Removendo dois elementos e adicionando dois elementos.
// let removidos = nomes.splice(3, 2, 'Anderson', 'James Hetfield');

// Simulando pop(), removendo no fianl do array.
// let removidos = nomes.splice(-1, 1);

// Simulando shift(), removendo do começo do array.
// let removidos = nomes.splice(0, 1);

// Simulando push(), adicionando elementos no fim do array.
// nomes.splice(nomes.length, 0, 'Anderson');

// Adicionando no inicio do array.
nomes.splice(0, 0, 'Anderson');




console.log(nomes);