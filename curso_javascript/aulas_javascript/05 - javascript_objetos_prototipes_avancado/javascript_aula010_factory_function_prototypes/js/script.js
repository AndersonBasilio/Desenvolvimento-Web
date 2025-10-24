// Factory function e Prototypes

// Criando um objeto literal, para cada metodo.
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    },
};

const comer = {
     comer() {
        console.log(`${this.nome} está comendo.`)
    },
};

// Criando um objeto usando spread
//const pessoaPrototype = {...falar, ...comer, ...beber};

// Desacoplando, tem um nome na programação de composição ou mixxin
const pessoaPrototype = Object.assign({}, falar, comer, beber);


// Função fabrica
function criaPessoa(nome, sobrenome) {
    // Retornando um objeto literal
    return Object.create(pessoaPrototype, {
        nome: { value: nome }, sobrenome: { value: sobrenome }
    });

}

// Criando uma pessoa, sem a palavra new pois nao tem new.
// Todas pessoas que criarmos não estará no metodo acoplado.
const pessoa1 = criaPessoa('Anderson', 'Santos');
const pessoa2 = criaPessoa('Maria', 'Helena');
console.log(pessoa2.falar());
