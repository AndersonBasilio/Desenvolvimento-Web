/*
    GETTERS e SETTERS -> Podemos ter somente get ou set.
    get é quando acessamos no console.log(carro1.velocidade).
    set é quando "colocamos um valor na velocidade: carro1.velocidade = 60;"
*/
// Quando temos bastante programadores trabalhando no projeto podem acontecer alguns problemas
const _velocidade = Symbol('velocidade'); // Symbol sempre será diferente e não pode ser acessada de fora do objeto.

class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;

        // Para utilizar symbol será dessa forma.
        this[_velocidade] = 0;
    }

    // Para settar, como é um método podemos checar.
    set velocidade(valor) {
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor  >= 100 || valor <= 0) return;
        this[_velocidade] = valor; // Retornamos o valor.
    }

    // Para acessarmos a velocidade do lado de fora criamos um get.
    get velocidade() {
        console.log('GETTER')
        return this[_velocidade];
    }

    acelerar() {

        // Dessa forma a velocidade não irá passar de 100 
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++; // Para utilizar Symbol será dessa forma.
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--; // Para utilizar symbol será dessa forma. 
    }
}

/*
    Algum programador atualiza a velocidade para 1500;
    Caso classico onde adicionamos um atributo ou propriedade classe privada
    e adicionar get e set.
    
    Adcionar uma chave privada utilizando Symbol.
*/

const carro1 = new Carro('Fusca');
for (let i = 0; i <= 200; i++) {
    carro1.acelerar();
}

//                        seria outra chave que esta setada.
// Carro { nome: 'Fusca', velocidade: 2000, 
// [Symbol(velocidade)]: 100 }
carro1.velocidade = 60; // Aceita se somente for um número.(set)
console.log(carro1.velocidade); // Acessando a velocidade 2000, apos utilizar o get acessamos a velocidade de 100.