// Vamos imaginar um sistema de e-commerce simples

/*
    Produtos disponíveis para venda: Camiseta, Caneca e Lápis.

    Como programadores, devemos identificar o que esses itens têm em comum
    para tornar o código mais limpo, reutilizável e orientado a objetos.

    Todos esses itens são tipos de "Produto", que é a nossa abstração principal.
*/

// Função construtora base para criar um Produto genérico
function Produto(nome, preco) {

    /*
        Todos os produtos podem sofrer aumento ou desconto de preço.
        Esses métodos serão definidos no prototype da função Produto.

        Características específicas:
        - Camiseta: possui uma propriedade "cor"
        - Caneca: possui uma propriedade "material"
    */

    this.nome = nome;
    this.preco = preco;

}


// Método para aumentar o preço de um produto
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

// Método para aplicar desconto no preço de um produto
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    // Função construtora específica para Camiseta.
    // Usamos Produto.call(this, ...) para herdar as propriedades da função Produto.
    // Precisamos também configurar o prototype corretamente para herdar os métodos.

    Produto.call(this, nome, preco, 'preto'); // Linkamos as duas funções.

    // A camiseta herda as propriedades de Produto, mas também possui a propriedade extra "cor".
    this.cor = cor; // Dessa forma minha camiseta tem uma propriedade a mais que é a cor.

}

// Função construtora espefica para caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco,);

    this.material = material;
    
        Object.defineProperty(this, 'estoque', {

            enumerable: true,
            configurable: false,
            
            // getter temos que clicar para ver a função no navegador.
            get: function() {
                return estoque;
            },

            set: function(valor) {
                if(typeof valor !== 'number') return;
                return estoque = valor;
            }
        })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// Herdando os métodos do prototype de Produto para o prototype de Camiseta.
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta // // Corrigindo a referência do constructor, pois ela foi sobrescrita.

// Criando as variáves atribuindo as funções.
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca1 = new Caneca('Caneca', 22.5, 'Vidro', 5 );

// Sobrescrevendo o método de aumento para Camiseta, agora usando percentual
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100)); // Aplicando um aumento de 100% no preço da camiseta
};

// Aumentar o preço da camiseta
camiseta.aumento(100);

console.log(camiseta);
console.log(caneca1);