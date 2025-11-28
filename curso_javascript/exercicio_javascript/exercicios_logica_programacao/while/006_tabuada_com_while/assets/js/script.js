/*
    6. Tabuada de um número
    Peça um número ao usuário e gere sua tabuada de 1 a 10 usando while.

*/

class Tabuada {

    constructor() {
        this.numero;
        this.contador = 1;
        this.textoTabuada = '';
    }

    solicitarNumero() {
        let numeroUsuario = Number(prompt('Insira um número para gerar a tabuada: '));

        while (isNaN(numeroUsuario)) {
            alert('Por favor insira um número!')
            numeroUsuario = Number(prompt('Insira um número para gerar a tabuada: '));
        }

        this.numero = numeroUsuario;
        return numeroUsuario;
    }

    formatarNumeros(resultado) {
        return resultado < 10 ? ' ' + resultado : resultado;
    }

    gerarTabuada() {
        this.contador = 1;
        this.textoTabuada = "";

        while (this.contador <= 10) {

           
            const multiplicadorFormatado = String(this.contador).padStart(2, '  ');

          
            const resultadoFormatado = String(this.numero * this.contador).padStart(2, ' ');

            const linha = `${this.numero} x ${multiplicadorFormatado} = ${resultadoFormatado}`;

            this.textoTabuada += linha + "<br>";
            this.contador++;
        }
    }

    exibirResultado() {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = this.textoTabuada;
    }
}

const num = new Tabuada();
num.solicitarNumero()
num.gerarTabuada(num);
num.exibirResultado();