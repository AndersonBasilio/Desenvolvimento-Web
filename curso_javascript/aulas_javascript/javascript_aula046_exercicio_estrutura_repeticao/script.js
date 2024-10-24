/*1) Baseado no exemplo da aula "Praticando um pouco - Percorrendo e listando itens de Arrays", implemente a mesma solução, porém utilizando o comando for.*/
document.write('<h1> Lista Frutas com FOR </h1>');
var listaFrutas = ['Laranja', 'Manga', 'Maçã', 'Uva', 'Melão', 'Pera'];

for(contador = 0; contador < listaFrutas.length; contador++){
    document.write(contador + 1 + ' - '  + listaFrutas[contador] + '<br>');
}



/*2) Baseado no exemplo da aula "Praticando um pouco - Criando uma tabuada de 1 a 10 (laços encadeados)", implemente a mesma solução, porém utilizando o comando while.
*/

document.write('<h1> Tabuada com WHILE </h1>');

var x = 1;
var y = 1;

while(y <= 10){
    while(x <= 10){
        //bloco de código
        document.write(x + ' x ' + y  + ' = '  + (x * y) + '<br>');
        x++;   
    }
    x = 1;
    document.write('<hr>')
    y++;
}
