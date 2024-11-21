/* 
    Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido
*/

//Função Principal.
function main(){
    let sexo = obterinformacao();
    verificarInformacao(sexo);   
}

// Função para obter informação do usuário.
function obterinformacao(){
    do{
        sexo = prompt('Informe seu sexo [F] para Feminino e [M] para Masculino: ').toLowerCase();
        if(sexo.length > 1){
            alert('Quantidade de caracteres invalida, informe o sexo corretamente.');
        } else if(sexo !== 'm' && sexo !== 'f'){
            alert('Sexo informado é invalido.');
        }
    }while(sexo.length > 1 || (sexo !== 'm' && sexo !== 'f'));
}

// Função para verificar a informação.
function verificarInformacao(sexo){
    let mensagem = sexo === 'f' ? 'F - Feminino.' : 'M - Masculino.'; 
    document.body.innerHTML += `<p>${mensagem}</p>`;
}

// Chamando a função principal
main();