/*
    🧩 Exercício 1 — Classe Carro

    Crie uma classe chamada Carro com as seguintes propriedades:

    marca

    modelo

    ano

    velocidadeAtual (inicia em 0)

    E os seguintes métodos:

    acelerar() → aumenta a velocidade em 10 km/h

    frear() → diminui a velocidade em 10 km/h (não pode ser menor que 0)

    mostrarStatus() → exibe no console a marca, modelo, ano e velocidade atual

    Desafio extra:
    Crie um método ligar() e desligar() e só permita acelerar se o carro estiver ligado.

*/

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidadeAtual = 0;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log('Carro já está ligado.');
        } else {
            this.ligado = true;
            console.log('Carro ligado!')
        }
    }

    desligar(){
        if(!this.ligado){
            console.log('Carro Já esta ligado');
        } else {
            this.ligado = false;
            this.velocidadeAtual = 0;
            console.log('Carro desligado.')
        }
    }

    acelerar() {
        if(!this.ligado){
            console.log('Carro não pode acelerar desligado, por favor ligue o carro!');
            return;
        }
        
        console.log(`Velocidade Atual ${this.velocidadeAtual += 10} Km/h.`)
    }

    freiar() {
        if(this.velocidadeAtual === 0){
            console.log('Velocidade não pode ser menor que 0');
        }else {
            this.velocidadeAtual -= 10;
            if(this.velocidadeAtual < 0) this.velocidadeAtual = 0
                console.log(`Freando... Velocidade atual: ${this.velocidadeAtual} km/h.`);   
        }
    }

    mostrarStatus(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nVelocidade Atual: ${this.velocidadeAtual}`);
    }
}


const carro1 = new Carro('FIAT', 'Uno', 2013);

carro1.mostrarStatus();
carro1.ligar();
carro1.acelerar();
carro1.acelerar();
carro1.freiar();
carro1.freiar();
carro1.desligar();

