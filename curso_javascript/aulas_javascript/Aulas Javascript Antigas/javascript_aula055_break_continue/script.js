
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//For Classico
/*for(let i = 0; i <= numeros.length; i++){

    let numero = numeros[i];
    if(numero % 2 == 0){
        console.log('Pulei o número par.');
        continue;
    }

    console.log(numero);

    if(numero === 9){
        console.log('9 encontrado saindo...');
        break;
    }
    
}*/

//While
/*let i = 0;
while(i < numeros.length){
    let numero = numeros[i];

    if(numero % 2 == 0){
        console.log('Pulei o número par.');
        i++;//Sempre atualizar a variavel de controle para não causar loop infinito.
        continue;
    }

    console.log(numero);

    if(numero === 9){
        console.log('9 encontrado saindo...');
        i++;//Sempre atualizar a variavel de controle para não causar loop infinito.
        break;
    }

    i++ //Sempre atualizar a variavel de controle para não causar loop infinito.  
}*/

//do While.
let i = 0;
do{
    let numero = numeros[i];

    if(numero % 2 == 0){
        console.log('Pulei o número par.');
        i++;//Sempre atualizar a variável de controle para não causar loop infinito.
        continue;
    }

    console.log(numero);

    if(numero === 9){
        console.log('9 encontrado saindo...');
        i++;//Sempre atualizar a variável de controle para não causar loop infinito.
        break;
    }

    i++ //Sempre atualizar a variável de controle para não causar loop infinito.  

} while(i < numeros.length)