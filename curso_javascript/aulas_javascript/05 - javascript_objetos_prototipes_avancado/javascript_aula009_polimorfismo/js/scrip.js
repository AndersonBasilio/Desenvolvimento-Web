/*
     Polimorfismo -> Forma de fazermos métodos se comportarem de maneira diferente.
     Classe = Função Construtora

*/

// Superclasse em Orientação a objetos (Função construtora)
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// "Metodo" ou prototype para sacar
Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: Seu saldo é R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();

};

// Criando o prototype de conta para fazer depósito.
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

// Criando o prototype de verSaldo para ver saldo de conta.
Conta.prototype.verSaldo = function () {
    console.log(`Agencia: ${this.agencia} / Conta:${this.conta}`);
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

// Criando conta corrente 
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

// Lincando a conta corrente a função construtora Conta.
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Herança dos prototype de conta, sobrescrevendo o método sacar na conta "filha"
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: seu saldo é R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

// Polimorfismo -> Método sacar se comportará de forma diferente.
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const contaCorrente1 = new ContaCorrente(11, 5258, 0, 100);
contaCorrente1.depositar(10);
contaCorrente1.sacar(110);
contaCorrente1.sacar(2);

console.log();

const contaPoupanca1 = new ContaPoupanca(12, 33, 0);
contaPoupanca1.depositar(10);
contaPoupanca1.sacar(10);
contaPoupanca1.sacar(1);


// Criando uma variável com
// const conta1 = new Conta(5236, 992452, 10);
// conta1.depositar(21);
// conta1.depositar(10);
// conta1.sacar(30);
// conta1.sacar(32);