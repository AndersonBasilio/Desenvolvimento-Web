var numero1 = Number(32);
var numero2 = Number(96);
var numero3 = Number(37);
var maior = 0;

//Primeiro tenho que verificar se o numero1 é maior ou menor que o segundo
if(numero1 > numero2){
    maior = numero1;
}else{
     maior = numero2;
}

//Verificando se o numero3 e maior
if(numero3 > maior){
    maior = numero3;

}

console.log(`O maior numero entre ${numero1}, ${numero2} e ${numero3} é ${maior}.`)