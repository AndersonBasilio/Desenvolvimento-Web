//Modelo do Objeto
class ContaBancaria {
    //Características
    //agência
    agencia: number;
    //numeroConta
    numeroConta:string;
    //saldo
    saldo:number;
    //limite
    limite:number;

    constructor(){
        this.agencia = 1075;
        this.numeroConta = "187555-5";
        this.saldo = 50;
        this.limite = 450;
    }

    depositar(valorDeposito:number): void {
        this.saldo += valorDeposito;
    }

    sacar(valorSaque: number): string{
        if(valorSaque <= this.saldo + this.limite){
            this.saldo -= valorSaque;
            return `Saque de R$${valorSaque} realizado com sucesso.`
        }else{
            return `Saldo insuficiente.`;
        }
    }
    consultarSaldo() {
        return `Seu saldo é de R$${this.saldo},00`;
    }

    exibirDetalhes(): string  {
        return `Agência: ${this.agencia}<br> Conta: ${this.numeroConta}<br>Saldo: ${this.saldo}<br>Limite: ${this.limite}`;

    }
}

//Exemplo de uso
let minhaConta = new ContaBancaria();
let minhaContaItau = new ContaBancaria();
minhaConta.depositar(200);
document.write(minhaConta.consultarSaldo() + '.<br>');
document.write(minhaConta.sacar(100) + '<br>');
document.write(minhaConta.consultarSaldo() + '<br>');

//Conta Itaú
document.write('<br><h2>Conta Itaú.</h2><br>')
document.write(minhaContaItau.consultarSaldo())