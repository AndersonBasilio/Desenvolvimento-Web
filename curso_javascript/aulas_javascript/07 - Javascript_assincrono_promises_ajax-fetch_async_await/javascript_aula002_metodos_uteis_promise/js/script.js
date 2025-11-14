/*
    Trabalhamos com promise quando utilizarmos coisas assincronas.
    Quando não temos certeza de quando irá terminar.
    Ex:
        Quando precisamos aguardar conteúdos que venham do servidor
        ou base de dados e não sabemos quanto tempo irá demorar.
*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    
    return Math.floor(Math.random() * (max - min) + max);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            if(typeof msg!== 'string') {
            reject('Tipo de dado diferente de STRING.'); // Podemos ver quando queremos rejeitar a promise

            // Se quisermos que a função pare de executar.
            return;
        }
            resolve(msg.toUpperCase() + ' Passei na Promise.');
        }, tempo);
    })
}

/*
    Promise.all => Passamos um array com promise ou valores resolvidos, irá entregar um valor com promise resolvido. (Resolve todas)

    Promise.race => Como se fosse uma corrida, a primeira que resolver irá entregar o valor.
    Promise.resolve => Retorna uma Promise resolvida.
    Promise.reject => Retorna uma Promise rejeitada.

*/

// const promises = [
//     // 'Primeiro valor', // Não é uma promisse jé entregou resolvido.
//     esperaAi('Promise 1', rand(1, 6)),
//     esperaAi('Promise 2', rand(1, 6)),
//     esperaAi('Promise 3', rand(1, 6)),
//     esperaAi(1000, rand(1, 6)),// Se todos valores forem corretos teremos o array completo.

//     //'Outro valor.' Já é uma promessa resolvida.
// ];

// // Promise.all 
// // Promise.all(promises)
// //     .then(function(valor){
// //         console.log(valor);  
// //     })

// //     .catch(function(erro){
// //         console.log('Erro: ' + erro);
// //     });

// // Promise race
// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor);  
//     })

//     .catch(function(erro){
//         console.log('Erro: ' + erro);
//     });

// Promise.resolve
// function baixaPagina(){
//     const emCache = false;   

//     if(emCache){
//         return Promise.resolve('Página em Cache.')
//     }

//     return esperaAi('Baixei a página.', 3000);
// }

// Promise.reject
function baixaPagina(){
    const emCache = true;   

    if(emCache){
        return Promise.reject('Página em Cache.')
    }

    return esperaAi('Baixei a página.', 3000);
}

baixaPagina()
    // Resolvido.
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(erro => console.log('Erro: ', erro)) // Quando der algum erro.