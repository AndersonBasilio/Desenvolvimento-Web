/* Manipulando Prototypes*/

/*
    Criando um objeto, sempre que criamos um objeto literal JS
    faz automaticamente a chamada da função construtora de 
    objetos que se chama new object.

    Todas função construtora tem um objeto atrelado que é 
    Object.prototype __proto__: Object.prototype


    Como sabemos que é um object.prototype ele não tem o proto.

    não usar __potro__

*/
//const objA = {
// chaveA: 'A'
//};

// objB = {
//chaveB: 'B'

// Para __proto__ ser o objA.
//};

//const objC = new Object();
//objC.chaveC = 'C';


// Nesse caso estamos acessando a chave dessa forma.
//Object.setPrototypeOf(objB, objA);
//console.log(objB.chaveA); // Com isso mudamos a cadeia do objetoB

/*Herdando do objeto C para objeto B.*/
//Object.setPrototypeOf(objC, objA);// Passando do objeto C direto para A.
//console.log(objC.chaveA);

//console.log(objA.__proto__ === Object.prototype) // Retorna true

// Utilizando as funções construtoras
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    // Não vamos criar metodos dentro da função, pois temos prototype.
}

// Criando um metodo com prototype.
// É mais performatico criar metodo fora da função construtora.
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const produto1 = new Produto('Camiseta', 50);
//produto1.desconto(100);
//produto1.aumento(100);

// Reaproveitando o prototye no produto2.
const produto2 =  { // Literal
    nome: 'Caneca',
    preco: 15
};

// Setando o obejt
Object.setPrototypeOf(produto2, Produto.prototype);

produto2.aumento()
//console.log(produto1); // Produto { nome: 'Camiseta', preco: 50 } como se fosse criado da função construtora.


/* 
    Criando um produto3 utilizando object.create()
    Função Object.create(); recebe objeto literal 
    Retorna o objeto vazio -> Object.create(Object.prototype) = {}
    Passando (Object.create(Produto.prototype)-> o construtor será Produto.

 */
const produto3 = Object.create(Produto.prototype, {
    // É opcional criar essa chave.
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },

    tamanho:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 44

    },
});
produto3.aumento(10); // Como não temos as chaves criamos na "unha"
console.log(produto3);