/*
     Getters e Setters -> Seria fazer um metodo da função simular que é uma propriedade
     Uma maneira de proteger uma propriedade.

*/

// Quando queremos que em uma propriedade receber apenas números.
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    // Cuidado ao trabalhar com propriedade, pois pode fazer o programa gerar um loop.
    // this.estoque


    //Se quisermos trabalhar com propriedade do objeto criamos uma variável.
    let estoquePrivado = estoque; // get e set irá manipular.

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave

        // Utilizaremos o getter e o setter para pegar o valor.
        // value: estoque, // Valor

        // Não irá fazer sentindo, pois temos um metodo que irá trabalahar o valor.
        // writable: true, // Pode alterar

        configurable: true, // Configuravel

        // Definindo get e setter
        // get geralmente so pega o valor e exibir o valor.
        get: function(){
            return estoquePrivado // estoque será exibido como getter (É um metodo que retorna o valor.)
        },

        // set é para configurar o valor, somente validamos o valor.
        set: function(valor){
            // Se usarmos dessa forma a indini do JS vai chamar essa função 
           // this.estoque = 'Qualquer coisa';

           // Após criarmos uma variável fazemos da seguinte forma
           // estoquePrivado = valor;

           // Queremos que seja somente number
           if(typeof valor !== 'number'){
            throw new TypeError('Valor invalido!')
           }
           estoquePrivado = valor;
        }
    });
}

// Em função factory podemos fazer direto no objeto.
function criaProduto (){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}


// const produto1 = new Produto('Camiseta', 20, 3);
// // console.log(produto1);

// //
// produto1.estoque = '250';

// // Para ver o real valor precisamos executar o getter.
// console.log('Valor real do estoque ' + produto1.estoque);

// Exemplo com função factory.
const produto2 = criaProduto('Camiseta') // Não precisamos da palavra new porque é uma factory function.
produto2.nome = 'Qualquer coisa'
console.log(produto2.nome);