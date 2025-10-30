let btnIniciar = document.querySelector('.iniciar');
let btnPausar = document.querySelector('.pausar');
let btnZerar = document.querySelector('.zerar');
let timer = document.querySelector('.timer');
let segundos = 0;
let intervalo;

function iniciaRelogio(){
    intervalo = setInterval(function(){
        segundos++
        timer.innerHTML = criaSegundosEmHora(segundos);
    }, 1000);
}

//Função para criar
function criaSegundosEmHora(segundos){
    // Criando uma variável com new Date e multiplicando segundos por 1000
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciar(botaoIniciar){
    botaoIniciar.addEventListener('click', function(){
        clearInterval(intervalo);
        iniciaRelogio();     
    });    
}

function pausar(botaoPausar){
    botaoPausar.addEventListener('click', function(){
        clearInterval(intervalo);
    });
}

function zerar(botaoZerar){
    botaoZerar.addEventListener('click', function(){
        clearInterval(intervalo);
        segundos = 0;
        timer.innerHTML = '00:00:00';
    });
}

iniciar(btnIniciar);
pausar(btnPausar);
zerar(btnZerar);