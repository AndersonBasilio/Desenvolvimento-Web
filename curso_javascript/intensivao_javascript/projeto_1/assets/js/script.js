const botaoPlayPause = document.querySelector('#play-pause');
const audio = document.querySelector('#audio-capitulo');
const botaoCapituloAnterior = document.querySelector('#anterior');
const botaoCapituloProximo = document.querySelector('#proximo');
const textoCapitulo = document.querySelector("#capitulo");
const quantidadeCapitulo = 10;

let estaTocando = false;
let capituloAtual = 1;

function tocarFaixa(){
    audio.play();
    estaTocando = true;

    botaoPlayPause.classList.add('tocando');
}

function atualizarCapitulo(){
    audio.src = `./assets/audio/${capituloAtual}.mp3`;
    textoCapitulo.innerHTML = `Capitulo ${capituloAtual}`;

    tocarFaixa();   
}

const pausarFaixa = () => {
    audio.pause();
    estaTocando = false;

    botaoPlayPause.classList.remove('tocando');
}

const tocarOuPausar = () => estaTocando ? pausarFaixa() : tocarFaixa();

let proximoCapitulo = () => {
    pausarFaixa();

    capituloAtual = (capituloAtual < quantidadeCapitulo) ? capituloAtual + 1 : 1; 

    atualizarCapitulo();
}

const capituloAnterior = () => {
    pausarFaixa();
    
    capituloAtual = (capituloAtual === 1) ? quantidadeCapitulo : capituloAtual - 1;
    
    atualizarCapitulo();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoCapituloProximo.addEventListener('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener('click', capituloAnterior);
    

