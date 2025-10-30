/*
    🧩 Exercício 2 — Calcular idade

    Peça ao usuário o ano de nascimento e calcule a idade atual com base na data do sistema.

    // Exemplo de saída: "Você tem 27 anos."
    const anoNascimento = 1998;
    // seu código aqui


    🟢 Dica: use getFullYear() para pegar o ano atual.

*/
const idade = document.querySelector("#verificaIdade");

idade.addEventListener('click', function(){
    const anoNascimento = capturaAnoNascimento();
    const campoValidado = verificaCampoAno(anoNascimento);
    
    if(!campoValidado) return;
    
    const idade = calcularIdade(anoNascimento);
    const mostrarMensagem = `Você nasceu no ano ${anoNascimento}, sua idade é ${idade} anos.`;

    exibirMensagem(mostrarMensagem, true);
    
});

// Pegar ano de nascimento do usuário
function capturaAnoNascimento(){
    const ano = document.querySelector('#inputAno');    
    return Number(ano.value);
}

// Criar paragrafo para exibir mensagem.
function criaParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

// Calcula a idade do usuário.
function calcularIdade(anoNasc){
    const anoAtual = new Date(); 
    return  anoAtual.getFullYear() - anoNasc;
}

// Verificar se o ano é valido.
function verificaCampoAno(campoCapturado){
    anoAtual = new Date().getFullYear()
    if(!campoCapturado || campoCapturado <= 0 || campoCapturado <= 1000 || campoCapturado > anoAtual){
        exibirMensagem('Campo não informado corretamente!', false);
        return false;
    }
    return true;
}

// Exibi para usuário.
function exibirMensagem(msg, eValido){
    const mensagem = document.querySelector("#mensagem");
    const paragrafoCriado = criaParagrafo();
    mensagem.innerHTML = '';

    paragrafoCriado.innerHTML = msg;

    if(eValido){
        paragrafoCriado.classList.add('valido'); 
    } else {
        paragrafoCriado.classList.add('invalido'); 
    }

    mensagem.appendChild(paragrafoCriado);
}

// Limpa a tela.
function limpa(){
    const inputAno = document.querySelector("#inputAno");
    inputAno.value = '';
    document.querySelector("#mensagem").innerHTML = '';
}



