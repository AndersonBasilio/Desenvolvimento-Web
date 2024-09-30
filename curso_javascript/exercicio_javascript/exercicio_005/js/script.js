alert('Bem-vindo ao meu site!');

function calcular(numero){
    var numero = prompt('Digite um número: ');
    var dobro = parseInt(numero) * 2;
    var metade = parseInt(numero) / 2;

    document.getElementById("texto").innerHTML = 'O dobro de ' + numero + ' é ' + dobro + ' e a metade é ' + metade + '!';   

}