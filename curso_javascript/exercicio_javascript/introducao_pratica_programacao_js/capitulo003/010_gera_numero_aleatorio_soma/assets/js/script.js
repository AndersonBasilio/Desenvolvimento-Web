/*
    Escreva um programa que gere dois números aleatórios de 1 a 10 e exiba os dois números e sua soma.
*/

class GeraNumerosAleatorio {
    constructor(primerioNumero, segundoNumero) {
        this.primerioNumero = primerioNumero;
        this.segundoNumero = segundoNumero;
    }

    doisNumerosAleatorioGerados(minimo = 1, maximo = 10) {
        Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        this.primerioNumeroGerado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        this.segundoNumeroGerado =  Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

        const primerioNumeroGerado = this.primerioNumeroGerado;
        const segundoNumeroGerado =  this.segundoNumeroGerado;
        
        return { primerioNumeroGerado , segundoNumeroGerado} ;
    }

    somarNumerosGerados(){ 
        const soma = this.primerioNumeroGerado + this.segundoNumeroGerado;

        console.log('Resultado de ' + this.primerioNumeroGerado + ' + ' + this.segundoNumeroGerado + ' = ' + soma);
    }

    main(){
        this.doisNumerosAleatorioGerados();
        this.somarNumerosGerados()
    }
}

const numeros = new GeraNumerosAleatorio();
numeros.main();
