//Com barra invertida podemos colocar dessa forma "Um \"texto\" " (Cractere de escape.) 
//let umaString = "Um \"texto\" ";

//string são indexado, indice 0 representa o primeiro indice da string.
//               0123456789 
let umaString = "O rato roeu a roupa do rei de roma."

//utilizamos [] dentro dos cochetes o numero do indice pegamos o elemento. 
//console.log(umaString[4]);


//Para pegar o elemento dentro do indice temos outra forma charArt mais a posição
//console.log(umaString.charAt(6));

//Temos uma função que concatena que se chama concat()
//Temos essa tres formas de fazer.
//console.log(umaString.concat(" em um lindo dia"));
//console.log(umaString + ' em um lindo dia.');
//console.log(`${umaString} em um lindo dia.`);

//Para sabermos o indice usamos o indexOf, significa que começa no indice 3. Se não for encontrado retorna -1
//                 01234567 
//let umaString = "Um texto"
//console.log(umaString.indexOf('texto'));

//lastIndexOf começa do final da string
//Se informamos alguma posição que não tiver retornará -1
//console.log(umaString.lastIndexOf('o', 3));

//Expressão regular
// match irá encontrar um array com as letras entra a-z
//console.log(umaString.match(/[a-z]/g));

// search retornará onde o indice for encontrado.
//console.log(umaString.search((/[a-z]/g)));

//replace é basicamente substitui alguma "coisa na string original", nesse caso você pode ou não usar.
//console.log(umaString.replace('Um', 'Outra coisa no'));

//Com expressão regular
// se quisermos mudar todos os r temos que usar a flag g dessa forma irá mudar todos
//console.log(umaString.replace(/r/g, '#'));

//Para ver o tamanho da string, retorna todos caracteres, indice começa do zero
//console.log(umaString.length);

//Dessa forma será fatiado ate o indice que desejou começar e terminar.
//                          start=2 / end=6
//console.log(umaString.length - 3)

//Nesse caso pega a string inteira e diminui 5
//console.log(umaString.slice(-5, -1));
//console.log(umaString.slice(32));

//substring
//console.log(umaString.substring(umaString.length - 5, umaString.length - 1))

//Dividir uma string usamos split
//console.log(umaString.split(' ', 3));

//Deixar a string em letra maiuscula
//console.log(umaString.toUpperCase());

//Deixar a string com letra minuscula
console.log(umaString.toLowerCase())




