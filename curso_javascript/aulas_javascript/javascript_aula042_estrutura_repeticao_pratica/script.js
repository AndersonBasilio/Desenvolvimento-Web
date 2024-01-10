var lista_frutas = Array();

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Laranja';
lista_frutas[2] = 'Manga';
lista_frutas[3] = 'Uva';
lista_frutas[4] = 'Maçã';
lista_frutas[5] = 'Goiaba';
lista_frutas[6] = 'Pera';
lista_frutas[7] = 'Graviola';

// var contador = 0;
/*
while(contador < lista_frutas.length){
    document.write(lista_frutas[contador] + '<br>');
    contador ++ 
}
*/
/*
do {
    document.write(lista_frutas[contador] + '<br>');
    contador++;
} while(contador < lista_frutas.length);

*/


for (contador = 0; contador < lista_frutas.length; contador++){
    document.write(contador + 1 + ': ' + lista_frutas[contador] + '<br>');
}
