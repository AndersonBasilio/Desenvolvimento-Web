/*
    Ao utilizar Promise em navegadores mais antigos pode
    dar erro ao utilizar promise.
        Exemplo de navegadores EXPLORE.
        Resolução do problema até explore 7. 
*/


function promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, sou a promise.');
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Terminou.')
    
}