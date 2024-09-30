function calcular_media(){
    var nome = prompt('Informe seu nome: ');
    var nota1 = Number(prompt('Qual foi a primera nota: '));
    var nota2 = Number(prompt(`Alem de ${nota1}, qual foi a outra nota de ${nome}?`));
    var media_final = Number(nota1 + nota2) / 2;
    var resultado = document.getElementById('resposta');

    resultado.innerHTML = ''

    resultado.innerHTML += `Calculando a média de <mark>${nome}<mark>.<br>`;
    resultado.innerHTML += `As notas obtidas foram <mark>${nota1} e ${nota2}<mark>.<br>`;
    resultado.innerHTML += `A média final será <mark>${media_final}.<mark><br>`;

    if(media_final >= 7){
        resultado.innerHTML += `A mensagem que temos é: <strong style='color:green;'>Meus parabéns!</strong>`
    } else {
        resultado.innerHTML += `A mensagem que temos é: <strong style='color:red;'>Estude um pouco mais!</strong>`
    }


}

/*
function mensagem(media_final){
    if(media_final >= 7){
        resultado.innerHTML += `A mensagem que temos é: <p>Meus parabens!</p>`
    } else {
        resultado.innerHTML += `A mensagem que temos é: <p>Estude mais!</p>`
    }
} */