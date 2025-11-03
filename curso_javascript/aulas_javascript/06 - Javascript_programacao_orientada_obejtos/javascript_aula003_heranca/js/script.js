/*
 Criando uma classe
 Não é bom fazer uma hierarquia muito grande, para achar um bug é muito complicado.

*/

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' Dispositivo já ligado');
            return
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' Dispositivo já desligado');
            return;
        }

        this.ligado = false;
    }
}

// Herdando de outra classe
class Smartphone extends DispositivoEletronico {
    // Se quisermos adicionar mais conteúdo em smartphone
    constructor(nome, cor, modelo) {
        super(nome); // Chamamos a classe construtora com super().
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o método ligar.')
    }

    falaOi(){
        // Herdamos tudo de nossos pais, mas nossos pais não herda nada de nós.
        console.log('Oi!') // Está somente no tablet pertence somente ao tablet.
    }
}

const Smartphone1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(Smartphone1);

const tablet1 = new Tablet('iPad', true);
console.log(tablet1.ligado); // Vai buscar no prototype pai.