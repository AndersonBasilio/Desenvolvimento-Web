/*
    Exercício 3: Verificar Idade
    Crie uma função chamada "verificaIdade" que recebe uma idade como parâmetro e retorna:
    - "Menor de idade" se a idade for inferior a 18.
    - "Maior de idade" se a idade for igual ou superior a 18.
*/
function main(){
    let idade =obterIdade(); // Ira armazenar a idade retornada
    verificarIdade(idade); // Passa a idade para verificação
 }

//Obter idade do usuário.
function pedirIdade(mensagem){
    let idade;
    do{
        idade = Number(prompt(mensagem));
        if(isNaN(idade)){
            alert('Digite uma idade válida.');
        }
    } while(isNaN(idade));
    return idade;    
}

function obterIdade(){
    return pedirIdade('Informe sua idade: ');
}

//Verificando idade do usuário.
function verificarIdade(idade){
    if(idade >= 18){
        document.write(`<h2>Sua idade é ${idade} anos, você é maior de idade.</h2>`);
    } else {
        document.write(`<h2>Sua idade é ${idade} anos, você é menor de idade.</h2>`)
    }
}

main()