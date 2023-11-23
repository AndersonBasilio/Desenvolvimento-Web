var nome = prompt('Informe seu nome: ')
var altura = prompt('Informe sua altura em cm: ')
var peso = prompt('Informe seu peso: ')

altura = parseFloat(altura)
peso = parseFloat(peso)
var altura_cm = altura /  100 

var imc = peso / (altura_cm * altura_cm)

if (imc < 16){
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Muito abaixo do peso, muito grave.')

} else if (imc >= 16 && imc < 17){
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Abaixo do peso, grave.')

} else if (imc >= 17 && imc < 18.49){
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Baixo peso.')

} else if (imc > 18.5 &&  imc < 24.99){
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Peso Normal')

} else if (imc > 25 && imc < 30){
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Sobrepeso')

} else if (imc > 30 && imc < 35){
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Obesidade grau I')

} else if (imc > 35 && imc < 40 ){
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Obesidade grau II')
    
} else {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ' Obesidade grau III')
}

