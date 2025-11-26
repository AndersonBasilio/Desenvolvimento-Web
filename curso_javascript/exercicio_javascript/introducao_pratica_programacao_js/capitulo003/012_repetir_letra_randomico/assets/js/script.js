/*
    Escreva um programa que peça ao usuário uma letra. Depois gere um número aleatório de 1 a 10 e imprima a letra esse número de vezes.        
*/

class RepetirLetra {
    constructor() {
        this.letraUsuario = '';
        this.numeroAleatorio = 0;
        this.resultadoLetrasRepetidas = '';
    }

    // Solicitar usuário uma letra.
    solicitarLetraUsuario() {
        this.letraUsuario = '';

        do {
            this.letraUsuario = prompt('Informe uma letra: ').trim();

            if (!/^[a-zA-Z]$/.test(this.letraUsuario)) {
                alert('Por favor, informe apenas uma letra.');
            }
        } while (!/^[a-zA-Z]$/.test(this.letraUsuario));

        return this.letraUsuario;
    }

    // Gerar um numero aleátorio 
    gerarNumeroAleatorio() {
        this.numeroAleatorio = Math.floor(Math.random() * 10) + 1;
       
    }

    // Repetir letra que usuário digitou com número gerado.
    repetirLetraComNumeroAleatorio() {
        this.resultadoLetrasRepetidas = this.letraUsuario.repeat(this.numeroAleatorio).split('').join(' - ');

    }

    //Exibe informação para usuário.
    exibirParaUsuario() {
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML += `A letra que você digitou foi <strong>[ ${this.letraUsuario} ]</strong>.`
        resultado.innerHTML += `<br>Letra informada repetida ${this.numeroAleatorio} vezes: <strong><i>[${this.resultadoLetrasRepetidas}<i></strong>]`
    }

    main() {
        this.solicitarLetraUsuario();
        this.gerarNumeroAleatorio();
        this.repetirLetraComNumeroAleatorio();
        this.exibirParaUsuario();
    }
}

const letraInformadaRepetida = new RepetirLetra();
letraInformadaRepetida.main();
