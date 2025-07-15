// Atalho para parar é CRTL + ALT + M

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Quando queremos trabalhar com um intervalo de tempo utilizamos a função (setInterval())
// Atualiza algo automaticamente

 
function funcaoDoInterval(){
    console.log(mostraHora())
}

// Vai configurar o intervalo de tempo para que a função seja executado em algum momento.
/*                            Criando uma função anonima.
    const tempo = setInterval(function(){
    console.log(mostraHora());

       Passamos de quanto em quanto tempo será executado, utilizando milisegundos.
    }, 1000);

*/

// Colocando a função em uma variável.
const tempo = setInterval(function(){
    console.log(mostraHora());
}, 1000);

// Função que executa somente uma fez
setTimeout(function() {
    //Função que faz parar
    clearInterval(tempo);
// Utilizamos dois milisegundos
}, 2000);


// Irá exibir "Olá Mundo na tela."
setTimeout(function(){
    console.log('Olá Mundo!');
}, 5000);