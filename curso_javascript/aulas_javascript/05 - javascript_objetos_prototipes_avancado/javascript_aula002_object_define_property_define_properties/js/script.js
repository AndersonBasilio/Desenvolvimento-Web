// defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    
    this.estoque = estoque;

    // Se quisermos que o estoque não seja alterado.
    //                    Objeto que queremos mexer
    
    // Não pode ser mudado dessa forma.
    // Object.defineProperty(this, 'estoque',{
    //     enumerable: true, //Mostra a chave.
    //     value: function(){
    //         return estoque;
    //     }, // valor
    //     writable: false, // Valor não pode ser alterado (true pode ser alterado), pode alterar.
    //     configurable: true // Configuravel se estiver como true.

    // });

    // // Dessa forma forma não pode ser alterado.
    //     Object.defineProperty(this, 'estoque',{
    //     enumerable: true, //Mostra a chave.
    //     value: estoque, // valor
    //     writable: true, // Valor não pode ser alterado (true pode ser alterado), pode alterar.
    //     configurable: false // Configuravel se estiver como true.

    // });


    // defineProperties
    Object.defineProperties(this, {
        // Definindo as propriedades, mas temos mais controle.
        nome: {
            enumerable:true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco: {
            enumerable:true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

// Criando uma objeto novo, variável nome é publica.
const p1 = new Produto('Camiseta', 20);
p1.estoque = 5202;

// Apagando o valor
//delete p1.estoque;
//console.log(p1.estoque());


// Ver chaves no array
console.log(p1);

// Com for in
for(let chave in p1){
    console.log(chave);
}