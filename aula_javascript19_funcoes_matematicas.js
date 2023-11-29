var x = 10.580; // variável do tipo number com ponto flutuante

arredondarParaCima = Math.ceil(x); // Arredonda o número para cima.
arredondarParaBaixo = Math.floor(x); // Arredonda o número para baixo.
arredondaParaCimaBaixo = Math.round(x); // Irá arredondar se a fração for < 5 para baixo > cima
numeroAleatorio = Math.random(); // Gera um número aleátorio.


document.write('Arredonda número para cima: ' + arredondarParaCima);
document.write('<br>Arredonda número para baixo: ' + arredondarParaBaixo);
document.write('<br> Arredonda o numero quanto para cima e para baico ' + arredondaParaCimaBaixo);
document.write('<br>Gera um número aleátorio.' + numeroAleatorio);

