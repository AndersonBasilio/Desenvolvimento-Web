function calculaMedia(nota1, nota2){
    var nota1 = Number(nota1);
    var nota2 = Number(nota2);
    var media = (nota1 + nota2) / 2
    
    console.log(`A media entre as notas ${nota1} e ${nota2} e de ${media}.`)
}

calculaMedia(3, 8)