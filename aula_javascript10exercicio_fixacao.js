var idade = prompt('Qual é sua idade? ')

if (idade >= 0 && idade < 15){
    //document.write('Criança')
    alert('Criança')

} else if (idade >= 15 && idade < 30){
    //document.write('Jovem')
    alert('Jovem')

} else if (idade >= 30 && idade < 60){
    //document.write('Adulto')
    alert('Adulto')

} else if (idade >= 60){
    //document.write('Idoso')
    alert('Idoso')
}