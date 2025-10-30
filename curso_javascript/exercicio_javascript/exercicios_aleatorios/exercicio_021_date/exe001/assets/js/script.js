/*function diaSemanaHora(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';  
            return diaSemanaTexto 
        case 1:
            diaSemanaTexto = 'Segunda-Feira'; 
            return diaSemanaTexto        
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto            
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto                  
        case 4:
            diaSemanaTexto = 'Quinta-Feira'; 
            return diaSemanaTexto          
        case 5:
            diaSemanaTexto = 'Sexta-Feira'; 
            return diaSemanaTexto          
        case 6:
            diaSemanaTexto = 'Sábado'; 
            return diaSemanaTexto
        default:
            diaSemanaTexto = 'Dia Invalido';         
    }
}

function acresentaZero(dia){
    if(dia < 10){
        return `0${dia}`;
    } else {
        return `${dia}`;
    }
}

function formataMes(mes){
    switch(mes){
        case 0:
            mes = 'Janeiro';
            return mes
        case 1:
            mes = 'Fevereiro';
            return mes
        case 2:
            mes = 'Março';
            return mes;
        case 3:
            mes = 'Abril';
            return mes;
        case 4:
            mes = 'Maio';
            return mes;
        case 5:
            mes = 'Junho';
            return mes;
        case 6:
            mes = 'Julho'
            return mes;
        case 7:
            mes = 'Agosto';
            return mes;
        case 8:
            mes = 'Setembro'
            return mes;
        case 9:
            mes = 'Outubro';
            return mes;
        case 10:
            mes = 'Novembro';
            return mes;
        case 11:
            mes = 'Dezembro';
            return mes;
    }
}

const data = new Date();
let diaSemanaAtual = diaSemanaHora(data.getDay());
let diaAtual = acresentaZero(data.getDate());
let mesAtual = acresentaZero(data.getMonth());
let anoAtual = data.getFullYear();
let horaAtual = data.getHours();
let minutosAtual = acresentaZero(data.getMinutes());
let exibirHorario = document.querySelector('.container');

exibirHorario.innerHTML += `<h1>${diaSemanaAtual}, ${diaAtual} de ${mesAtual} de ${anoAtual}, ${horaAtual}:${minutosAtual}</h1>`;*/

// Modo mais facil
//const h1 = document.querySelector('.container h1');
//const data = new Date();
//h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });

// Resolução sem Switch
const h1 = document.querySelector('.container h1');
const data = new Date();

function mesesAno(mes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return meses[mes]
}

function acresentaZero(dia){
    return dia >= 10 ? dia : `0${dia}`;
}

function diasDaSemana(diaSemana){
    let diaSemanaTexto = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return diaSemanaTexto[diaSemana];   
}

function criarData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = diasDaSemana(diaSemana);
    const nomeMes = mesesAno(numeroMes);
    
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` + 
        `${acresentaZero(data.getHours())}:${acresentaZero(data.getMinutes())}`
    );
}

h1.innerHTML = criarData(data);


