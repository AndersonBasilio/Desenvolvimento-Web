// Classe é a mesma coisa que uma função construtora.

// Classe é um molde
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Criando métodos.
    falar() {
        console.log(`${this.nome} está falando.`);
    }

    // Comparativo
}

/*
    Instância criamos um obejto apartir da classe.
    Não podemos esquecer da palavra new.
*/

// Criando pessoa3 com o método construtor.
function Pessoa3(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa3.prototype.falar = function () {
    console.log(`${this.nome} está falando.`);
};

// Podemos criar quantos pessoas quisermos.
const pessoa1 = new Pessoa('Anderson', 'Basilio');
const pessoa2 = new Pessoa('James', 'Hetfield');

// Utilizando função construtora.
const pessoaCriada = new Pessoa3('Freddie', 'Mercury');

// Saída
console.log(pessoa1.falar()); // Todos irão usar o método do pai que é class Pessoa.
console.log(pessoaCriada)