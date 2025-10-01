// Para criar um objeto podemos usar literal é feito pelas chaves. {}
//const pessoa = {
//Corpo do objeto
// Objeto é formado por um par chave e valor.

//chave   valor
//     nome: 'Anderson',
//     sobrenome: 'Basilio',
// };

// Notação de ponto.
//console.log(pessoa.nome);

// Notação de cochetes, vai ser mais verbosa.
// Utilizado para quando não sabemos qual chave irá vim.

// const chave = 'nome'
// console.log(pessoa[chave]);


// Podemos utilizar construtor do objeto
// const pessoa = new Object();
// pessoa.nome = 'Anderson';
// pessoa.sobrenome = 'Basilio';

// console.log(pessoa.nome, pessoa.sobrenome);


// Apagando chave nome.
// const pessoa = new Object();
// pessoa.nome = 'Anderson';
// pessoa.sobrenome = 'Basilio';

// Utilizando notação de ponto
// delete pessoa.nome 

// Utilizando notação de cochetes
// const deletarNome = 'nome'
// delete pessoa[deletarNome];
// console.log(pessoa);

// Metodo são funções que estão dentro do objeto.
// const pessoa = new Object();
// pessoa.nome = 'Anderson';
// pessoa.sobrenome = 'Basilio';
// pessoa.idade = 34;
// pessoa.falarNome = function (){
//     return `Olá, sou ${this.nome}.`
// };

// pessoa.getDataNascimento = function(){
//     const dataAtual = new Date();

    //                              this esta representando a pessoa.
//     return dataAtual.getFullYear() - this.idade; 
// }

// Para vermos a chave podemos usar for in.
// for(let chave in pessoa ){
    // Retorna a chave.
    //console.log(chave);

    // Veremos os valores da chave.
//     console.log(pessoa[chave]);
// }

// console.log(`${pessoa.falarNome()} e meu ano de nascimento é ${pessoa.getDataNascimento()}.`);

// Podemos ter dois tipos de funções para ser moldes para criar outros objetos.
// Factory Functions / Constructor functions

// // Factory Functions
// function criaPessoa(nome, sobrenome){
//     return {
//         nome, sobrenome,
        
//         // Dentro do objeto podemos ter getters e setters
//         nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }


// const pessoa1 = criaPessoa('Anderson', 'Basilio');
// console.log(pessoa1.nomeCompleto());

// Constructor Functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Nenhum objeto this pode ser modificado.
    Object.freeze(this);

}

// Palavra new cria um objeto vazio e atrela a palavra this dentro da função.
const pessoa1 = new Pessoa('Anderson', 'basilio');

// Em algum momento podemos fazer que o objeto não seja alterado
// Quando em Objeto quanto em array.
//Object.freeze(pessoa1);

// Como se fosse feito dessa forma.
// const pessoa2 = {};
// pessoa2.nome = 'James Hetfield';

// Dessa forma estamos alterando o valor do valor da constante e não a constante.
// pessoa1 = (ENDERAÇO DE MEMORIA)

// Não podemos fazer dessa forma.
// pessoa1 = 'Anderson';

pessoa1.nome = 'Outra coisa'
console.log(pessoa1);
