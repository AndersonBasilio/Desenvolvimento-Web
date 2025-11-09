/*
    Quando trabalhamos na internet muita vezes que buscamos, 
    recurso onde não temos noção exata de quando os recursos irá voltar.
    Ex:
        Conectamos em uma API e pedimos dados ao usuário e não temos noção exata de
        quando os dados será retornado.

    Promisse veio para resolver a questão de funções de callback.

*/

// Cria um milésimo de segundos
function rand(min, max) {
    min = min *= 1000;
    max = max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);

}

// Criando uma simulação de função 
function esperaAi(mensagem, tempo) {
    setTimeout(() => {
        console.log(mensagem + ' ' + 'Tempo: ' + tempo);
    }, tempo);
}

/*
    Quando precisamos de resolver o problema de executar a função ordenada independente do tempo.
    Utilizandoo função de callback.

*/

// Chamando a função esperaAi.
// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3)); // Frase 3 só será chamada quando a frase 2 terminar.
//     });    
// });

// Utilizando promisse.
function esperaAi(mensagem, tempo) {
    // resolve -> Código executou com sucesso.
    return new Promise((resolve, reject) => {

        // reject -> Código com erro (rejeitado).
        if(typeof mensagem !== 'string') reject('Bad Value.');
        // Corpo da função.
        setTimeout(() => {

            // Chamamos onde chamariamos callback.
            // Só podemos mandar um parâmetro único.
            resolve(mensagem);

        }, tempo);
    });
}

// Para utilzar
esperaAi('Conexão com Banco de Dados.', rand(1, 3))

    // Sempre que chamarmos resolve, then será executado.
    // Recebe funções
    .then(resposta => {
        console.log(resposta);

        // Podemos retornar outra promisse.
        return esperaAi('Buscando Dados da BASE.', rand(1, 3));
    })

    // Retornando outra promisse.
    .then(resposta => {
        console.log(resposta);  
        return esperaAi(222222, rand(1, 3));
        //return esperaAi('Tratando os DADOS.', rand(1, 3));

    }).then(resposta => {
        console.log(resposta);  
    }).then(() => {
        console.log('Exibi os dados na tela..');  
    })

    // Será capturado quando chamarmos reject.
    // Recebe funções, catch sempre é erro.
    .catch(erro => {
        console.log('Erro: ', erro); // Retorna o erro (Bad Value)
    });

    console.log('Será exibida antes de qualquer um promisse.');


