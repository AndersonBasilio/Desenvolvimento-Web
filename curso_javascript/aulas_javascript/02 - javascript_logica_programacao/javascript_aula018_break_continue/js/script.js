// BREAK e CONTINUE funciona em todas as estruturas
// BREAK pode melhorar a velocidade do código.
// continue -> Continua para proxima iteração.
// break sai do laço.

//Atalho para formatar os espaços é shift + alt + f
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let numero of numeros){
    
//     // Pular algumas dessas iterações
//     if(numero % 2 === 0 ){
//         console.log('Pulei os números pares.')

//         // Sempre colocar o continue abaixo do codigo 
//         continue;// Vai te o final
//     }
//     console.log(numero);

//     // Suponhamos que queremos encontrar o número 7.
//     if(numero === 7){
//         console.log(`Número ${numero} foi encontrado, saindo do laço...`)
//         break // Não executa mais nada que estiver abaixo.
//     }

//     // Sempre colocar o número abaixo do código.
// }

// Utilizando while
// let variavelControle = 0;

// while(variavelControle < numeros.length){
//     let numero = numeros[variavelControle];
//     if(numero === 2){
//         console.log('Pulei o numero ' + numero);

//         variavelControle++ // Temos que colocar a variavel de controle antes do continue.
//         continue;
//     }
    
//     console.log(numero);

//     if(numero === 7){
//         console.log('Número ' + numero + ' encontrado, saindo...');

//         variavelControle++  // Temos que colocar antes da variável de controle.
//         break;
//     }

//     variavelControle++
// }

//Utilizando do while
let variavelControle = 0;

do {
    let numero = numeros[variavelControle];
    if(numero === 2){
        console.log('Pulei o numero ' + numero);

        variavelControle++ // Temos que colocar a variavel de controle antes do continue.
        continue;
    }
    
    console.log(numero);

    if(numero === 7){
        console.log('Número ' + numero + ' encontrado, saindo...');

        variavelControle++  // Temos que colocar antes da variável de controle.
        break;
    }

    variavelControle++
} while(variavelControle < numeros.length)
