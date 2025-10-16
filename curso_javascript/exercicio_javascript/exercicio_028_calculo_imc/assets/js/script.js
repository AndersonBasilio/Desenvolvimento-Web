// Captura evendo de submit do formulário
const form = document.querySelector("#formulario");

// Para parar o envio do formulário utilizamos uma função.
// submit é um evento que devemos escutar.
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Bloqueando o comportamento padrão para não enviar o formulário.

    // Informa o elemento que esta recebendo o evento. 
    const inputPeso = Number(event.target.querySelector('#peso').value);
    const inputAltura = Number(event.target.querySelector('#altura').value);
    
    if(!inputPeso){
        setResultado('Peso Invalido', false);
        return
    }
    if(!inputAltura){
        setResultado('Altura Invalido', false);
        return; 
    }

    const imc = pegaImc(inputPeso, inputAltura);
    const nivelImc = verificaNivelImc(imc);
    const mensagem = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(mensagem, true);

});

// Para se ter um codigo limpo sempre dividimos em pequenas funções, geralmente faz uma tarefa.
// Função para adicionar algo na div resultado e mostrar na tela do HTML.
function setResultado(msg, eValido) {

    // Pegando a informação da div com id resultado.
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // Limpando o HTML 

    // Usando a função para criar paragrafo.
    const paragrafoCriado = criaParagrafo();

    // Aplica a classe de estilo dependendo se é valido ou não.
    aplicaEstilo(paragrafoCriado, eValido)

    paragrafoCriado.innerHTML = msg;
    resultado.appendChild(paragrafoCriado);

}

// Cria paragrafo.
function criaParagrafo(){
    const paragrafo = document.createElement('p'); // Criando um paragrafo.
    return paragrafo; //Retornando o paragrafo criado
}

// Função que verifica o nivel do imc
function verificaNivelImc(imc){
    // Array de niveis.
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    // Condições dos niveis do imc.
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

// Aplica estilo no paragrafo
function aplicaEstilo(paragrafo, eValido){
    const paragrafoValido = eValido ? paragrafo.classList.add('paragrafo-resultado') :paragrafo.classList.add('paragrafo-invalido'); 
    return paragrafoValido;

    // if(eValido) {
    //     paragrafo.classList.add('paragrafo-resultado');
    // } else {
    //     paragrafo.classList.add('paragrafo-invalido');
    // }    
}

// Função que calcula o imc
function pegaImc(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}



