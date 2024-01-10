var lista_coisas = Array();
lista_coisas['frutas'] = Array('Banana', 'Maçã', 'Morango', 'Uva');

lista_coisas['pessoas'] = [];
lista_coisas['pessoas']['a'] = 'João';
lista_coisas['pessoas']['b'] = 'Maria';
lista_coisas['pessoas']['c'] = 'José';
lista_coisas['pessoas']['d'] = 'James';

document.write(lista_coisas['pessoas']['a'] + ' gosta de ' + lista_coisas['frutas'][0] + '.<br>');
document.write(lista_coisas['pessoas']['b'] + ' gosta de ' + lista_coisas['frutas'][1] + '.<br>');
document.write(lista_coisas['pessoas']['c'] + ' gosta de ' + lista_coisas['frutas'][2] + '.<br>');
document.write(lista_coisas['pessoas']['d'] + ' gosta de ' + lista_coisas['frutas'][3] + '.<br>');
