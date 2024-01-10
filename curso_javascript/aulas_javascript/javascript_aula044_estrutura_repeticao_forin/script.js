//var listaConvidados = ['Anderson', 'Freddie Mercury', 'James Hetfield', 'Kirk Hammet'];

var listaConvidados = Array();

listaConvidados['a'] = 'Anderson';
listaConvidados[10] = 'Freddie Mercury';
listaConvidados['zebra'] = 'James Hetfield';
listaConvidados[-1] = 'Kirk Hammet';
listaConvidados[true] = 'Lars';

console.log(listaConvidados);

for (var x in listaConvidados){
    console.log('Indice: ' + x  + ' | Valor: ' + listaConvidados[x]);
}