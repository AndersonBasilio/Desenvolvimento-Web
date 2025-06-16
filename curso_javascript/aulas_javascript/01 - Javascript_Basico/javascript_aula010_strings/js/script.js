//let umaString = 'Um texto';
//let umaString = 'Um \'texto\''; //Dessa forma fazemos o escape no e colocamos as aspas
//let umaString = 'Um \\texto'; //Se quisermos colocar uma barra invertida colocamos duas barras

//               0123456789...
let umaString = 'O rato roeu a roupa do rei de roma.'// String são indexadas, sendo o indice 0 representa o primeiro elemento.

/*
    .charAt(indice que deseja verificar) -> Retorna a letra do indice que desejar.
    Ex:
        console.log(umaString.charAt(5))


    .concat('Texto que desejar') -> Irá concatenar valores.
    Ex:
        console.log(umaString.concat(' em ' + 'um lindo dia.'));

    Utilizando Tamplates string
    Ex:
        console.log(`${umaString} em um lindo dia!`);

    .indexOf(Texto que deseja saber) -> Para saber em qual indice começa a palavra.
    Ex:
        console,.log(umaString.indexOf('texto'))
    OBS: Se não existir retornará menos 1

    .lastIndexOf(O que deseja saber.) -> Começa buscar de tras para frente.
    Ex:    
        console,.log(umaString.lastIndexOf('o', 3)) dessa forma retornará -1 pois informamos o index.

    .match(/[a-z]/g) -> Expressão regular, retornará uma lista com todas letras minusculas. 
    console.log(umaString.match(/[a-z]/g));

    .search() -> Irá pesquisar se tem o que procura
    Ex:
        console.log(umaString.search(/x/)); Pesquisando se tem a letra (x) retorna o indice.

    .replace(O que quer mudar) -> Pode usar expressão regular ou não.
    Ex:
        console.log(umaString.replace('Um', 'Outro'));
        
        Dessa forma irá substituir todos os r por #
        console.log(umaString.replace(/r/g, '#'));
    
    .length -> Não é uma função, mas sim um atributo que retornará o tamanho da string.
    console.log(umaString.length);
        
    slice(Inicio=2, Fim=6 Fatiando a string) -> Fatia a string.
    Ex:
        console.log(umaString.slice(2, 6));
        console.log(umaString - 1);
        
    .split(O que deseja dividir) -> Irá dividir a string com um array.
    Ex: 
        console.log(umaString.split(' '));

    .toUpperCase() -> Irá deixa em letra maiusculas.
    console.log(umaString.toUpperCase());

    .toLowerCase() -> Irá deixar em letra minusculas.
    console.log(umaString.toLowerCase());
*/

console.log(umaString.toUpperCase());