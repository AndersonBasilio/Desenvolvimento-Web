/* 
    Tudo que ocorre no navegador é considerado um evento.
    Ex:
        Clicamos em um botão no navegador
        Digitamos algo no navegador
        Minimizamos a tela do navegador
        
        //Escopo Global
        const nome = 'Anderson';
        
        function qualquer(){
            // Escopo da função, temos acesso somente dentro da função.
            const nome = 'Anderson';
        }

*/

function meuEscopo(){
    // Selecionamos por classe, id ou nome
    const form = document.querySelector('.form');
    let resultado = document.querySelector('#resultado');

    //Criando um array vazio
    const pessoas = [];

    //Capturando o evento
    //Sempre que utilizamos uma atribuição para uma função temos que usar (;) no final
    //form.onsubmit = function(evento){
        //Não esta enviando o formulario.
    //    evento.preventDefault();
    //    alert(1)
    //    console.log('Foi enviado.')
    //};


    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura'); 
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
            
        });
        
        console.log(pessoas)
        resultado.innerHTML += `<p><strong>Nome:</strong> ${nome.value}  <strong>Sobrenome:</strong> ${sobrenome.value} <strong>Peso: </strong> ${peso.value} <strong>Altura:</strong> ${altura.value} </p>`;
    }
   
    //Utilizando recurso mais moderno
    form.addEventListener('submit', recebeEventoForm);

    
}

meuEscopo();

