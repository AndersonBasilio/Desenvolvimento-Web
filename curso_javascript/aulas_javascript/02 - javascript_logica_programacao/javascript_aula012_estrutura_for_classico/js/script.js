// Estrutura de repetição FOR Classico, fazem coisas repetitivas.
// Estrutura FOR
//(   Inicializa com uma variavel; Condição; Incremento ){
//for(let i = 0                  ; i <= 5  ;  i++)
//  console.log();
//}

// Podemos alterar o incremento para (i += 2) 
// Para decrementar o index tem que ser maior e utilizamos o decremento (i -= 2)
// for (let i = 10; i >= 1; i -= 2){
//     console.log(i);
// }

//Podemos começar com negativo também
// for (let i = -10; i <= 10; i += 2){
//     console.log(i);
// }

// Criando um array, quando usamos para percorrer array a condição é i < frutas.length
// const frutas = ['Laranja', 'Pêra', 'Uva', 'Banana']
// for(let i = 0; i < frutas.length; i++){
//     console.log(`Índice ${i} - ${frutas[i]}`);
// }

// Checando qual número é para e qual é impar.
// for(let i = 1; i <= 10; i++){
//     const parOuImpar = i % 2 === 0 ? `${i} - PAR` : `${i} - IMPAR`;
//     console.log(parOuImpar);   
// }

// Criando um array, quando usamos para percorrer array a condição é i < frutas.length
const frutas = ['Laranja', 'Pêra', 'Uva', 'Banana', 'Morango', 'Caqui']
for(let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i} - ${frutas[i]}`);
}
