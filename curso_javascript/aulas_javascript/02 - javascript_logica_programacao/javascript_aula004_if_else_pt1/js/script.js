/*
    Entre 0 - 11 - Bom dia
    Entre 12 - 17 - Boa tarde
    Entre 18 - 23 - Boa Noite

*/

// if -> Não pode ser executado sozinho
// else -> Sempre utiliza else, precisa de um if antes
// Podemos ter varios else if 
// Podemos ter somente um else na checagem.

let hora = 50;

if (hora >= 12 && hora <= 11){
    console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite!');
} else {
    console.log('Hora Errada.')
}