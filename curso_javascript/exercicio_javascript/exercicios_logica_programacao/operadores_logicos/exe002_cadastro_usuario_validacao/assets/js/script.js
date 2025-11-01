/*
    Exercício 2 — Cadastro de usuário com validação

    Crie um programa que solicite os seguintes dados do usuário:
    Nome
    Idade
    Email
    Senha

    Regras para validação:

    O nome não pode ser vazio.

    A idade deve ser entre 18 e 65.

    O email deve conter o símbolo @.

    A senha deve ter pelo menos 8 caracteres.

    Se todas as condições forem atendidas, exiba:

    Cadastro realizado com sucesso!


    Caso contrário, exiba uma mensagem específica informando qual regra não foi atendida.
*/

// Solicitar informação ao usuário.
function solicitarInformacao() {

    let nome = prompt('Informe seu nome: ');
    let idade = Number(prompt('Informe sua idade: '));
    let email = prompt('Informe seu e-mail');
    let senha = prompt('Insira a senha');

    // Campo não pode esta diferente do que foi pedido.
    while (

        nome.trim() === '' ||
        isNaN(idade) ||
        email.trim() === '' ||
        senha.trim() === ''

    ) {
    
        alert('Por favor, informe corretamente as informações.');
        nome = prompt('Informe seu nome: ');
        idade = Number(prompt('Informe sua idade: '));
        email = prompt('Informe seu e-mail');
        senha = prompt('Insira a senha');

    }

    return {
        nome: nome,
        idade: idade,
        email: email,
        senha: senha
    };
}

// O email deve conter o símbolo @.
function validaEmail(email) { 
    const verificaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(verificaEmail.test(email)){
        return true;
    } else {
        return false;
    }
}

//  A senha deve ter pelo menos 8 caracteres.
function validaSenha(senha) {
    if(senha.length >= 8){
        return true;
    } else {
        return false;
    }
}

// Válida idade
function validaIdade(idade) {
    if(idade >= 18 && idade <= 65){
        return true;
    } else {
        return false;  
    }      
}

function validaCadastro(){
    let informacoesUsuario = solicitarInformacao();
    
    let nome = informacoesUsuario.nome;
    let senhaValida = validaSenha(informacoesUsuario.senha);
    let idadeValida = validaIdade(informacoesUsuario.idade);
    let emailValido = validaEmail(informacoesUsuario.email);

    if (senhaValida === true && idadeValida === true && emailValido === true) alert(`${nome} cadastro realizado com sucesso.`);
    if(senhaValida === false) alert('A senha deve ter pelo menos 8 caracteres.');
    if(idadeValida === false) alert('Idade fora do range.');
    if(emailValido === false) alert('E-mail informado é inválido.');    
     
}

// Função principal
function main(){
    validaCadastro();
}

// Chamando função principa -> Executar o programa.
main();
