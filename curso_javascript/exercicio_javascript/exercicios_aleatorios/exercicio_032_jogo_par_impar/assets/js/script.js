class ParOuImpar {
    constructor() {

        this.escolhaNumeroUsuario = 0;
        this.numeroComputador = 0;
        this.parOuImparComputador = "";
        this.escolhaUsuario = "";
        this.soma = 0;
        this.ganhador = "";
    }

    obterInformacoesUsuario() {
        const escolhaUsuario = document.querySelector('#escolha').value;
        const escolhaNumeroUsuario = document.querySelector('#numero').value;

        if (escolhaNumeroUsuario > 10 || escolhaNumeroUsuario < 0) {
            alert('Número inválido, por favor escolha um número válido.');
            return;
        }

        this.escolhaNumeroUsuario = Number(escolhaNumeroUsuario);
        this.escolhaUsuario = escolhaUsuario;
    }

    escolherParOuImpar() {
        this.parOuImparComputador =
            this.escolhaUsuario === "par" ? "impar" : "par";
    }

    gerarNumeroComputador() {
        this.numeroComputador = Math.floor(Math.random() * 11);
    }

    somarNumerosUsuarioComputador() {
        this.soma = this.escolhaNumeroUsuario + this.numeroComputador;
    }

    obterGanhandor() {
        let paridade = this.soma % 2 === 0 ? 'par' : 'impar';


        if (paridade === this.escolhaUsuario) {
            this.ganhador = 'Usuário foi Campeão!';
        } else {
            this.ganhador = 'Computador Campeão!';
        }
    }

    delay(texto, tempo) {
        const resultado = document.querySelector('#resultado');
        setTimeout(() => {
            resultado.innerHTML += texto;
        }, tempo);
    }

    mostrarVencendor() {
        const resultadoJogo = document.querySelector('#resultado');

        resultadoJogo.innerHTML = '';

        this.delay("<br>Par...", 500);
        this.delay(" Ou...", 1500);
        this.delay(" Ímpar !!!", 2500);

        setTimeout(() => {
            resultadoJogo.innerHTML += `
                <br><br>
                Usuário escolheu: ${this.escolhaUsuario}
                <br>Usuário jogou o número: ${this.escolhaNumeroUsuario}

                <br><br>

                Computador escolheu: ${this.parOuImparComputador}
                <br>Computador jogou o número: ${this.numeroComputador}

                <br><br>

                Soma = ${this.soma}

                <br><br>

                <strong>${this.ganhador}</strong>
            `;
        }, 3500);
    }

    jogar() {
        const botao = document.querySelector('#botaoJogar');

        botao.addEventListener('click', () => {
            this.obterInformacoesUsuario();
            this.escolherParOuImpar();
            this.gerarNumeroComputador();
            this.somarNumerosUsuarioComputador();
            this.obterGanhandor();
            this.mostrarVencendor();
        });
    }
}

const jogoParOuImpar = new ParOuImpar();
jogoParOuImpar.jogar();

