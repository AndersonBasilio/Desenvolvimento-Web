/*
    Crie um objeto pessoa com nome, idade e profissão. 
    Adicione um método que aumente a idade da pessoa em 1 ano.

*/

let pessoa = {
    nome: 'Anderson',
    idade: 34,
    profissao: 'Analista de Suporte',

    aumentarIdade(){
        this.idade += 1;
        console.log(`Idade foi atualizada para ${this.idade}.`);
    }
};


pessoa.aumentarIdade()


