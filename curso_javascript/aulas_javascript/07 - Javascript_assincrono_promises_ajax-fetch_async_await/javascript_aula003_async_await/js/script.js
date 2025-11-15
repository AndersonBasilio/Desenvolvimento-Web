/*
    Async Await -> Deixa o código bem mais limpo.

*/

function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

// Função faz simulação de algo que demora.
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Caiu no ERRO!');
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na PROMISE.');
            return;
        }, tempo);
    });
}

// Fazendo uma cadeia de Promise (Promise veio para ajudar o callback).
// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);

//         return esperaAi('Fase 2', rand());
//     })

//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3 ', rand());
//     })

//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })

//     .then(fase => {
//         console.log('Terminamos na Fase ', fase);
//     })

//     .catch(erro => console.log('Erro: ', erro));

/* 
    Utilizando async await.

    Quando colocamos palavra async na função, podemos utilizar 
    await para esperar uma promise ser finalziada.

    Temos 3 estados na Promise:
    pending -> Pendente está sendo executado e não retornou o valor.
    fulfilled: significa que a operação foi concluída com sucesso.
    rejected: significa que a operação falhou.

*/
async function executa() {
    try {
        const fase1 = esperaAi('Fase 1 ', 1000);  // armazenamos dentro de uma variável.
        console.log(fase1);

        setTimeout(function () {
            console.log('Essa Promise estava Pendente: ', fase1);

        }, 1100)

        // Executar até encontrar o erro, não executa mais nada para baixo.
        const fase2 = await esperaAi(2, rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3 ', rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);
    } catch (erro) {
        console.log('Erro: ', erro);
    }
}

executa();