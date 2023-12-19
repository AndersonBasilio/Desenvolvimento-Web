var lista_frutas = Array();

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';
lista_frutas[4] = 'Abacaxi';

var auxiliar = lista_frutas.indexOf('Laranja');
if(auxiliar === -1){
    console.log('Elemento não existe.');

} else {
    console.log('Elemento existe e está na posição ' +  auxiliar + '.');
}