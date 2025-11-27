/*
    3. Somar números até o usuário digitar 0
    Peça números ao usuário e some todos eles até que ele digite 0.
*/

class SomarNumeros {

    constructor() {
        this.lista = [];
        this.total = 0;
    }

    pedirNumero() {
        return Number(prompt('Para parar a execução digite 0. Por favor informe um número: '));
    }

    adicionarNumerosLista(num) {
        this.lista.push(num);
    }

    solicitarNumeros() {

        this.lista = [];
        this.total = 0;

        while (true) {

            let numero = this.pedirNumero();

            if (isNaN(numero)) {
                alert('Por favor, insira apenas números!');
                continue;
            }

            if (numero === 0) break;

            this.adicionarNumerosLista(numero);

            this.total += numero;
        }
    }

    mostrarUsuario() {
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = `[ ${this.lista.join(" + ")} ]  =  ${this.total}`;
    }

    main() {
        this.solicitarNumeros();
        this.mostrarUsuario();
    }
}

const soma = new SomarNumeros();
soma.main();

