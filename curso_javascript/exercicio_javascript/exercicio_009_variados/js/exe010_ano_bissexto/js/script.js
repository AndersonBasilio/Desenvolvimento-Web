var ano = Number(2080)
//Verificar se ele é divisivel por 4
//Exceções divisiveis por 100
//Exceção para anos divisíveis por 400
if(ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)){
    console.log('Ano é bissexto.')
} else{
    console.log('Ano não é bissexto')
}


