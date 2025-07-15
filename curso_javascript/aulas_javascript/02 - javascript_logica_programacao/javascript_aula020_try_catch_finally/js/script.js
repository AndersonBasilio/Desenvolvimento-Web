// // Quando o código começa a se afastar muito da margem começa a ficar mais complexo.


// try {
//     //console.log(a);
//     // É executada quando não há erros.
//     console.log('Abrir um arquivo.');
//     console.log('Manipulei o arquivo e gerou erro.');
//     console.log('Fechei o arquivo.');

//     //Podemos criar outro try
//     try {
//         console.log(b);
//     } catch(erro) {
//         console.log('Deu Erro!');
//     }
//     // Também irá executar o finally.

// } catch(erro){
//     // É executada quando há erros.
//     console.log('Tratando o erro.');
    
// } finally {
//     // Será executado sempre.
//     //PODEMOS TENTAR FECHAR NO FINALLY.
//     console.log('FINALLY: Sempre será executado.');
    
// }

// Criando uma função que retorna a hora.
function retornaHora(data){
    // Checando invertido
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

//Tratando erro
try {
    const dataCriada = new Date('1991-07-19T12:00:52');
    const hora = retornaHora(dataCriada);
    console.log(hora);
} catch (e){
    //Trata o erro
    //console.log(e)

} finally {
    console.log(`Tenha um bom dia.` );
}


