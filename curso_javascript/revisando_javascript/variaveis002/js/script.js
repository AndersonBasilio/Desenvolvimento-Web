// Variavel e algo que se pode mudar durante o codigo.
// Let e var = var é antigo sempre utilizamos let

/*let nome = 'João';
let esposa = 'Maria';
let filho = 'Eduardo';


console.log(`${nome} nasceu em 1984.`);
console.log(`Em 2000 ${nome} conheceu ${esposa}.`);
console.log(`${nome} casou-se com ${esposa} em 2012.`);
console.log(`${esposa} teve um filho com ${nome} em 2015.`);
console.log(`O filho de ${nome} se chama ${filho}.`);
*/
/*
let nome = 'Anderson';

if(nome === undefined){
    console.log('Nome não tem nenhum valor.');
}else{
    console.log(nome);
}*/

// Exercicio de variaveis e const
const nome = 'Anderson Basilio';
const altura = 1.60;
let idade = 33;
let peso = 60;
let imc = peso / (altura * altura);
let anoAtual = 2025
let anoNascimento = anoAtual - idade

// Imprimindo informações na tela
console.log(`Olá ${nome}, tudo bem? Confirmando algumas informações você tem ${idade} anos,  altura ${altura}, peso ${peso}, IMC ${imc} e seu ano de nascimento é ${anoNascimento}`);

