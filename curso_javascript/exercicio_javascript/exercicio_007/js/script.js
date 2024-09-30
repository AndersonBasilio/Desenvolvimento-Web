function mostrar_relogio(){
    var data = new Date();
    var hora = data.getHours()
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    verifica_hora(hora);


    hora.innerHTML  = '';
    minuto.innerHTML = '';
    segundo.innerHTML = '';

    document.getElementById('hora').innerHTML =  fixTime(hora);
    document.getElementById('minuto').innerHTML = fixTime(minuto);
    document.getElementById('segundo').innerHTML  = fixTime(segundo);


}

function fixTime(tempo){
    if(tempo < 10){
        return '0' + tempo;
    }else {
        return tempo;
    }
}

function verifica_hora(hora){
    var body = document.body;

    if(hora >= 5 && hora < 12){
        body.style.backgroundImage = "url('imagem/nascer-sol-2.jpg')";

    } else if(hora >= 12 && hora < 18){
        body.style.backgroundImage = "url('imagem/tarde-1.webp')";
        
    } else {
        body.style.backgroundImage = "url('imagem/noite.jpg')";
    }

}

mostrar_relogio()

setInterval(mostrar_relogio, 1000)
