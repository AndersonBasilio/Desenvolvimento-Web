// Revisão Arrays

//                    0            1           2
//const arrayBandas = ['Metallica', 'Megadeth', 'Queen'];

// Podemos manipular os valores
// arrayBandas[2] = 'Kiss';

// Podemos deletar um valor sem remover o indice (<1 empty item>).
// delete arrayBandas[2];

// Funciona para todos tipos de dados, utilizando um construtor
//const arrayBandas = new Array('Metallica', 'Megadeth', 'Queen');


// Arrays são valor por referência, seria dado um valor inesperado.
// Tudo que fizer em arraysBandas reflete em novasBandas vice e versa
// const novasBandas = arrayBandas;
// novasBandas.push('Judas Priest');

// Podemos copiar os valores utilizando spread(...)
// Quando queremos pegar o resto do array usamos rest(...), quando quisermos espalhar utilizamos spread(...)
// Fazendo uma copia.
// const novasBandas = [...arrayBandas];
// novasBandas.push('Judas Priest');

// Pegando o tamanho do array .length, não usamos os () pois é um atributo.
//console.log(arrayBandas.length);

// Removendo elementos dentro do array.
// pop() remove no final do array e retorna o elemento removido.
//let removido = arrayBandas.pop();
//console.log(arrayBandas + ' Elemento removido: ' + removido);

// .shift remove do começo e desloca todos elementos do array.
// arrayBandas.shift();

// Adicionando elementos no final do array
//arrayBandas.push('Alice in Chains');

// Adicionando elementos no inicio do array, não é muito comum porque irá deslocar para array grande tras problemas.
//arrayBandas.unshift('Sepultura');

// Fatiando array
// Podemos trabalhar com números negativos remove com o valor negativo escolhido.
// let bandasNovas =  arrayBandas.slice(0, -1)//arrayBandas.slice(0, 2);
// console.log(bandasNovas);

// Convertendo uma string no array
// .split() separa a string em arrays.
// const stringNome = 'Anderson Basilio Amparo dos Santos';
// const arrayNome = stringNome.split(' ');

// Para fazer que o array volte a ser uma string novamente
// .join irá unir o array.
const arrayNome = ['Anderson', 'Basilio',  'Amparo',  'dos',  'Santos'];
const nome = arrayNome.join(' ');

console.log(nome);


