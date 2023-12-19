function acionaCampo(){
    document.getElementById('campo').style.background = "yellow";
}

function validaCampo(){
    var valorCampo = document.getElementById('campo').value;
    
    if (valorCampo.length < 3){
        valorCampo.trim()
        document.getElementById('campo').style.background = "red";

    }else {
        document.getElementById('campo').style.background = "green";

    }
}