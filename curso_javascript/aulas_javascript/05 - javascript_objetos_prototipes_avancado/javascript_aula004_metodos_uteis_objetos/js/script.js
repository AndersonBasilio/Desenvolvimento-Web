/*
    Object.values -> Retorna os valores
    Object.entrie -> Retorna chave e valor, mas entre arrays
    Object.assign(des, any) -> Usado para copiar um objeto de destino
    Object.getOwnPropertyDescriptor(o, 'prop') -> Retorna descritor dentro daquela propriedades
    ...(spread) -> Espelha os valores dentro de um objeto

    // Já vimos
    Object.keys (Retorna as chaves)
    Object.freese (Congela o Objeto)
    Object.defineProperties (Define varias proriedades)
    Object.defineProperty (Define uma propriedade)

*/

// // Como copiar um objeto
//Copiando os dados que tem em produto

// // Copiando os valores do produto
// // const outroProduto = {...produto, 
// //     // Podemos criar mais coisas
// //     material: 'Porcelana'
// // };

// // Criando Object.assign(des, any), Copiando os dados que tem em produto
// const caneca = Object.assign({}, produto, 
//     // Criando outro objeto
//     {material: 'Vidro'}
// );


// // Alterando o valor produto.
// produto.nome = 'Camiseta'; // Alteramos os doisa valores.

// // Alterando preço.
// produto.preco = 2.5

// //console.log(produto); // { nome: 'Camiseta', preco: 2.5 }
// //console.log(outroProduto); // { nome: 'Caneca', preco: 1.8 }

// console.log(caneca); // { nome: 'Caneca', preco: 1.8, material: 'Vidro' }


// console.log(Object.keys(produto)); Object.keys => Mostra a chave dos objetos

// Objeto não pode ser alterado.
// Object.freeze(produto);

// Tentando alterar o nome do produto.
//produto.nome = 'Produto2'
//console.log(produto)

// Object.getOwnPropertyDescriptor -> Retorna as propriedades
// const produto = {nome: 'Produto', preco: 1.8.toFixed(2)};
// Object.defineProperty(produto, 'nome', {
//     // Alterando os valores.
//     writable: false,
//     configurable: false
// });

// Alterando o nome
// produto.nome = 'Outra coisa'
// produto.preco = 23.9 // Como a chave não foi alterada de valores será mudado.

/* 
    É retornado no console
        value: 'Produto', 
        writable: true,   
        enumerable: true, 
        configurable: true
}

*/
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);

const produto = {nome: 'Produto', preco: 1.8};
//console.log(Object.values(produto)); // Retorna somente os valores.
// console.log(Object.entries(produto)); // Retorna os valores dentro do array.

// Iterando sobre os valores.
// Podemos fazer desctructor direto no for.
// for(let [chave, valor] of Object.entries(produto)){
//     console.log(chave, valor);
// }

// Podemos fazer dessa forma também
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}
