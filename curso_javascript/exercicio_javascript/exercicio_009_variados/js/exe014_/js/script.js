function imprimir(){
    let [numero1, numero2] = receberInput();
    verificarNumeroMaiorDez(numero1, numero2);
    verificarParImpar(numero1, numero2);    
}

//Receber dados do usuario
function receberInput(){
    let num1 = prompt('Informe um número: ');
    let num2 = prompt('Informe outro número: ');

    //Verificar se o valor foi digitado, enquanto usuário na digitar nada.
    while(isNaN(num1) || isNaN(num2)){
        alert('Números invalidos! Por favor digite um número.');
        num1 = prompt('Informe um número: ');
        num2 = prompt('Informe outro número: ');
    }
    
    num1 =  Number(num1);
    num2 =  Number(num2);
       
    //Somente retorna com array.
    return [num1, num2];

}

//Verificar se são maiores que 10 usando o operador &&.
function verificarNumeroMaiorDez(numero1, numero2){
    if(numero1 > 10 && numero2 > 10){
        console.log('Números são maiores que dez.');
    } else if(numero1 > 10 && numero2  < 10){
        console.log('Primeiro número é maior que dez, o segundo é menor que dez.');        
     } else if(numero1 < 10 && numero2 > 10){
        console.log('Primeiro número é menor que dez, o segundo é maior que dez.');
    } else{
         console.log('Ambos números são menores que dez.');
    }
}


// Verificar se é par ou impar e é maior que 10.
function verificarParImpar(num1, num2){
    if(num1 % 2 === 0){
        console.log(`${num1} é Par e ${num1 > 10 ? 'Número maior que dez' : 'Menor que dez.`);
    } else{
        console.log(num1 > 10 ? 'Número maior que dez': 'Menor que dez.');
        console.log(`${num2} é Impar`);
    }
    if(num2 % 2 === 0){
        console.log(num2 > 10 ? 'Número maior que dez': 'Menor que dez.');
        console.log(`${num2} é Par.`);
    } else{
        console.log(num2 > 10 ? 'Número maior que dez': 'Menor que dez.');
        console.log(`${num2} é Impar.`);
    }
}