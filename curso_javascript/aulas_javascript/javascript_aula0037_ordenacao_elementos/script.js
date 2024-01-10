/*var lista_frutas = Array();

lista_frutas[0] = 'Laranja';
lista_frutas[1] = 'Uva';
lista_frutas[2] = 'Maçã';
lista_frutas[3] = 'Morango';
lista_frutas[4] = 'Banana';

console.log(lista_frutas.sort());
*/
var lista_numeros = Array();


lista_numeros[0] = 1;
lista_numeros[1] = 12;
lista_numeros[2] = 3;
lista_numeros[3] = 47;
lista_numeros[4] = 59;

console.log(lista_numeros.sort(ordenaNumeros));

function ordenaNumeros(a, b){
    return a - b;
    // < 0 a ordenado antes de b
    // > 0 b ordenado antes de a
    // == a ordem é mantida

}