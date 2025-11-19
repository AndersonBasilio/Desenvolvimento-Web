//var data = new Date();

//document.write(data.getDate() + ' / ' + (data.getMonth() + 1) + ' / '  + data.getFullYear());

/*
// Adicionar / Remover dias
document.write('Adicionar ou Remover dias.<br>')
document.write(data.toString());
data.setDate(data.getDate() + 720);
document.write('<hr>');
document.write(data.toString());
document.write('<br><hr>');

//Adicionar / Remover meses
document.write('Adicionar ou Remover meses.<br>')
document.write(data.toString());
data.setMonth(data.getMonth() + 1);
document.write('<hr>')
document.write(data.toString());
document.write('<br><hr>');

//Adicionar / Remover anos
document.write('Adicionar ou Remover anos.<br>')
document.write(data.toString());
data.setFullYear(data.getFullYear() + 1);
document.write('<hr>');
document.write(data.toString());
*/

// 15 / 01 / 2017
var data1 = new Date(2017, 0, 15);

// 23 / 02 / 2017
var data2 = new Date(2017, 1, 23);

document.write(data1.toString() + '<br>');
document.write(data2.toString());
document.write('<hr>');
// Converter datas para algo que possamos calcular.
document.write(data1.getTime());
document.write('<hr>');
document.write(data2.getTime());

//1 de janeiro de 1970 até a data escolhida

//Encontrar a quantidade de milessegundo entre data1 e data2
var milisegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime());
document.write(milisegundosEntreDatas);
document.write('<hr>');


// 1 dia tem 24h, cada hora tem 60 minutos, 
//cada minuto tem 60 segundos e 
// cada segundo tem 1000 milessegundos 
// quantos milessegundo tem em um dia?
var milisegundosPorDia =  (1 * 24 * 60 * 60 * 1000);
document.write('<br>1 dia tem: ' + milisegundosPorDia + ' milesegundos.');
document.write('<br><br><hr>');
var totalDeMilissegundoEntreDataDias = (milisegundosEntreDatas /  milisegundosPorDia);

document.write('A diferença entre  data1  e  data2  é de ' + Math.ceil(totalDeMilissegundoEntreDataDias) + ' dias.');