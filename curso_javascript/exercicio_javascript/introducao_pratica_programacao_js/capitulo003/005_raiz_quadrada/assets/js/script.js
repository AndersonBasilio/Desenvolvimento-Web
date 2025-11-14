/*
    Escreva um programa que peça ao usuário um número positivo e imprima a raiz quadrada dele, arredondada para 2 casas decimais.
*/

class CalcularRaizQuadrada {
    constructor(){
        this.numero = null;
        this.resultado = null;
    }

    // Solicitar número usuario
    solicitaNumero(){
        let valor = prompt("Informe um número positivo:");

        while (valor === null || isNaN(valor) || Number(valor) < 0 || valor.trim() === '') {
            alert("Por favor, informe apenas números positivos.");
            valor = prompt("Informe um número positivo:");
        }

        this.numero = Number(valor);
        return this.numero;
    }

    // Realiza raiz quadrada do número.
    raizQuadrada(){
        const numeroValido = this.solicitaNumero();
        const resultado = Math.sqrt(numeroValido);

        this.resultado = resultado;

        return resultado;
    }

    // Exibi resultado para usuário
    mostrarResultado(){
        const mostraResultadoUsuario = document.querySelector('#mostraResultado');
        
        return mostraResultadoUsuario.innerHTML = `<h3><i>Raiz Quadrada de &radic;${this.numero}  =  ${this.resultado.toFixed(2)}</i></h3>`;
    }

    // Método principal.
    main(){
        this.raizQuadrada();
        this.mostrarResultado();
    }
}

const raizQuadradaCalculada = new CalcularRaizQuadrada();
raizQuadradaCalculada.main()


