/*
    ✅ Exercício 1: Criar um novo tipo de produto — Lápis

    Objetivo: Praticar a criação de uma nova função construtora que herda de Produto.

    Descrição:
    Crie uma função construtora chamada Lapis que herda de Produto. Essa função deve aceitar os parâmetros nome, preco e cor.
    Depois, crie uma instância de Lapis e use os métodos aumento ou desconto nela.

    Dicas:

    Use Produto.call(this, ...) para herdar as propriedades.

    Use Object.create(...) para herdar o prototype.

    Corrija o constructor.

    Exemplo esperado:

    const lapis = new Lapis('Lápis Preto', 2.0, 'Preto');
    lapis.aumento(1); // aumenta R$ 1
    console.log(lapis); // Deve exibir o lápis com novo preço e cor

*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

function Lapis (nome, preco, cor){
    Produto.call(this, nome, preco, 'preto');

    this.cor = cor;
}

Lapis.prototype = Object.create(Produto.prototype);
Lapis.prototype.constructor = Lapis;

Lapis.prototype.aumento = function (quantia) {
    this.preco += quantia;
};


const lapis = new Lapis('Faber Castel', 2.0, 'Preto');
lapis.aumento(1)
console.log(lapis);
