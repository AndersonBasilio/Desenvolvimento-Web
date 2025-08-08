/*
    Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
*/

const consoantes  = [
    'b','c','d', 'f', 'g', 'h', 'j', 'k','l', 'm', 'n', 'p', 'q',
    'r', 's', 't', 'v', 'x', 'z', 'w', 'y'
]

const vogais = [
    'a', 'e', 'i', 'o', 'u'

]

for(contador = 0; contador < consoantes.length; contador++ ){
    console.log(consoantes[contador]);
}

console.log('VOGAIS')

for(contador2 = 0; contador2 < vogais.length; contador2++){
    console.log(vogais[contador2]);
}

// Pedir para o usuario digitar uma letra.
//let letra = prompt('Digite uma letra: ').toLowerCase();
//if(letra.length > 1){
    
    
//}

// Verificar letra, nao pode ser numero.
