/*
    Escreva um programa que peça ao usuário um número inteiro positivo.
    Depois gere um número aleatório entre esse número e 10 a mais que ele, e imprima a letra A esse número de vezes na mesma linha.
*/

class RepetirLetra {
    constructor() {
        this.numeroUsuario;
        this.aleatorio;

    }

    // Pedir usuario um numero inteiro.
    solicitarNumeroUsuario() {
        let numeroUsuario = Number(prompt('Informe um número positivo: '));

        while (numeroUsuario < 0 || isNaN(numeroUsuario)) {
            alert('Número inválido, por favor informe apenas números positivos.');
            numeroUsuario = Number(prompt('Informe um número positivo: '))
        }

        this.numeroUsuario = numeroUsuario;

    }

    // Gerar número aleátorio entre o número e 10 a mais.
    gerarNumeroAleatorio() {
        const max = this.numeroUsuario + 10;
        const min = this.numeroUsuario;
        const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        
        return this.aleatorio = aleatorio;
    }

    // Imprimir a letra A o número de vezes na mesma linha.
    letraRepetida() {
        const letra = 'A';
        const resultado = document.querySelector('#resultado');

        return resultado.innerHTML = `${letra.repeat(this.aleatorio)}`;
    }

    // Função principal.
    main() {
        this.solicitarNumeroUsuario();
        this.gerarNumeroAleatorio();
        this.letraRepetida();
    }
}

const numeroParaRepetirLetra = new RepetirLetra();
numeroParaRepetirLetra.main();
