/*
    Exercício 1 - Cadastro de Pessoa

    Crie um objeto chamado pessoa com as propriedades:

    nome (string)

    idade (number)

    profissao (string)

    Depois:

    Mostre no console uma frase usando as propriedades (ex: "Meu nome é João, tenho 25 anos e sou Programador").

    Adicione dinamicamente uma nova propriedade chamada cidade.

    Altere a profissão da pessoa.

*/

const pessoa = {
    nome: 'Anderson', 
    idade: 34,
    profissao: 'Analista de Suporte',
    
    informacao(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao} moro em ${this.cidade}.`);   
    }
}

pessoa.cidade = 'Belo Horizonte',
pessoa.profissao = 'Desenvolvedor'

pessoa.informacao();