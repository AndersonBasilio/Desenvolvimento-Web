// 3 escopos: global, função e bloco

// Escopo GLobal
var serie = 'Friends';

// Escopo de Bloco
if (true) {
    var serie2 = ', Game Of Thrones, ';
    document.write(serie);
}

document.write(serie2);

document.write('<br>');


function x(){
    // Escopo da função
    var serie3 = ' The Walking Dead';
    document.write(serie);
    document.write(serie2);
}

x();

document.write('<br>')

document.write(serie3);

