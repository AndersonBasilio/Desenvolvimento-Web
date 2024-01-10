//   true &&   true  &&  false  => False
/*if (2 == 2 && 3 >= 1 && 'a' == 'b'){
    document.write('Verdadeiro')
} else {
    document.write('Falso')

}*/

//   true &&   true  &&  false  => Verdadeiro se uma expressão for verdadeira todas serão
/*if (2 || 2 || 3 >= 1 || 'a' == 'b'){
    document.write('Verdadeiro')
} else {
    document.write('Falso')

}*/

// false = false
/*if (!(4 == 2)){
    document.write('Verdadeiro')
} else {
    document.write('Falso')

}*/

var nota = prompt('Digite a nota do aluno: ')
var faltas = prompt('Digite a quantidade de faltas: ')

var media = 7
var faltas_maximas = 15

if (nota >= media && faltas <= 15){
    document.write('Aprovado!!')

} else {
    document.write('Reprovado!!')
}




