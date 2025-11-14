/*
    A distância entre dois números na reta numérica é o valor absoluto da diferença entre eles.
    Por exemplo, a distância entre 3 e 7.2 é |3 - 7.2| = 4.2.
    Escreva um programa que peça dois números e exiba a distância entre eles.

*/

// Pedir dois numeros
class DistanciaEntreNumeros {
    constructor (numero1, numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    // Solicita números ao usuário.
    solicitarNumeros(){
        let numero1 = Number(prompt('Insira o primero numero: '))
        let numero2 = Number(prompt('Insira o segundo número: '));
       
        if(isNaN(numero1) || isNaN(numero2)){
            alert('Por favor, insira apenas números para calcularmos a distância.');
            return this.solicitarNumeros();
        }

        this.numero1 = numero1;
        this.numero2 = numero2;

    }

    // Calcular distância entre os números.
    calcularDistancia(){
        let distanciaCalculada = this.numero1 - this.numero2;

        return Math.abs(distanciaCalculada);
    }
    
    // Mostrar distância.
    MostrarDistanciaCalculada(){
        
        let visualizarDistancia = document.querySelector('#mostrarDistancia');

        return visualizarDistancia.innerHTML = `<h3><i>Distância entre ${this.numero1} e ${this.numero2} é ${this.calcularDistancia()}.</i></h3>`
    }

    // Método Principal.
    main(){
        this.solicitarNumeros();
        this.calcularDistancia();
        this.MostrarDistanciaCalculada();  
    }
}

const distanciaNumeros = new DistanciaEntreNumeros();
distanciaNumeros.main();