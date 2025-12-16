// Definição de variáveis simples
// const nome = 'Anderson';
// const sobrenome = 'Basilio';

// Função que retorna uma saudação utilizando as variáveis acima
// const saudacao = () => {
//     return `Olá ${nome} ${sobrenome}, tudo bem?`;
// }

/*
    O objeto `module` existe apenas no Node.js.
    Tudo o que for atribuído a `module.exports` será exportado pelo módulo.
*/

// console.log(module);

/*
    Forma tradicional de exportação usando module.exports
*/
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.saudacao = saudacao;

/*
    Forma simplificada (atalho) para exportar usando `exports`
    `exports` é apenas uma referência para `module.exports`
*/

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.saudacao = saudacao;

/*
    O `this`, neste contexto, também referencia `module.exports`
    Ou seja, qualquer propriedade adicionada aqui será exportada
*/

// this.qualquerCoisa = 'O que eu quiser exportar.';

/*
    Classe Pessoa
    Responsável por armazenar nome e sobrenome e retornar uma saudação
*/
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Método que retorna uma mensagem de saudação
    saudar() {
        return `Olá ${this.nome} ${this.sobrenome}, tudo bem?`;
    }
}

/*
    Exportando a classe Pessoa
    Ela poderá ser importada em outros arquivos usando require
*/
exports.Pessoa = Pessoa;