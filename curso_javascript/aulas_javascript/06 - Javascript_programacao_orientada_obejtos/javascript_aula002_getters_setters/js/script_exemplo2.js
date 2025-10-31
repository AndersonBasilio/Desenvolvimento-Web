class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    // Nesse caso precisa receber um valor, porque o valor é atribuido a variável.
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const pessoa1 = new Pessoa('Anderson', 'Basilio');

// set
const pessoa2 = new Pessoa('Farrokh Bulsara');
pessoa2.nomeCompleto = 'Farrokh Bulsara';
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

console.log(pessoa1.nomeCompleto); // console.log(pessoa1.nomeCompleto()); se não tiver usando get informa que não é uma função.