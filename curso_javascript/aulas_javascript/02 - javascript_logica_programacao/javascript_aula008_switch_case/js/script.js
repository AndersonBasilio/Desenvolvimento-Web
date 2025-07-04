// Switch Case - Faz a comparação automaticamente.

function getDiaSemanaTexo(diaSemana){
    let diaSemanaTexto; //Variável somente inicializada.

    switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        //break se não tiver o break irá executar a proxima palavra break
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = 'Dia não encontrado.'
    } 
}
        
const data = new Date('1991-02-19 00:00:00');
let diaSemana = data.getDay();

// Função tem seu escopo proprio, sendo assim temos que criar utilizando uma variável fora da função
const nomeDiaSemana = getDiaSemanaTexo(diaSemana); 

        
console.log(`${diaSemana} - ${nomeDiaSemana}`);

// Utilizando estrutura if/else que não é muito apropriada, pois estamos verificando em uma variável se é igual com varios valores.
// if(diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// } else if(diaSemana === 1){
//     diaSemanaTexto = 'Segunda';
// } else if(diaSemana === 2){
//     diaSemanaTexto = 'Terça';
// } else if(diaSemana === 3){
//     diaSemanaTexto = 'Quarta';
// } else if(diaSemana === 4){
//     diaSemanaTexto = 'Quinta';
// } else if(diaSemana === 5){
//     diaSemanaTexto = 'Sexta';
// } else if(diaSemana === 6){
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = 'Dia não encontrado.';
// }

// Utilizando switch case
// switch (diaSemana){
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         //break se não tiver o break irá executar a proxima palavra break
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = 'Dia não encontrado.'
// }
