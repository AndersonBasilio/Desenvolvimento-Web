/*
    Exercício 2 - Carrinho de Compras

    Crie um objeto chamado carrinho que contenha uma lista (array) de produtos.
    Cada produto deve ser um objeto com:

    nome (string)

    preco (number)

    quantidade (number)

    Depois:

    Adicione pelo menos 3 produtos no carrinho.

    Crie um método dentro do objeto que calcule o valor total da compra.

    Mostre o total no console

*/

let carrinho = {
    produtos: [
        {
            nome: 'Açucar 10KG',
            preco: 3.98,
            quantidade: 2
        },
        {
            nome: 'Arroz',
            preco: 22.50,
            quantidade: 1
        },

    ], 
    
    calculaPreco(){
        let soma = 0;
        for(let i = 0; i < this.produtos.length; i++){
            let produto = this.produtos[i]
            soma += produto.preco * produto.quantidade;
        }
        console.log(`Total das compras é ${soma}`);
        
    },
    
};

carrinho.produtos.push({
    nome: 'Neston',
    preco: 5.99,
    quantidade: 2
});

carrinho.produtos.push({
    nome: 'CX Leite',
    preco: 45.20,
    quantidade: 2
});

console.log('Carrinho de compras', carrinho.produtos);
carrinho.calculaPreco();