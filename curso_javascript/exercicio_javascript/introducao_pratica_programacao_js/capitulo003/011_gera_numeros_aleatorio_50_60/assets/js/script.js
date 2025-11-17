/*
    Escreva um programa que gere e imprima 100 números aleatórios de 50 a 60, todos na mesma linha, separados por espaços.   

*/

class GerarNumerosAleatorios {
    constructor(){
        this.lista = [];
    }
    
    geraNumeros(){ 
        const minimo = 50
        const maximo = 60;
        
       for(let i = 1; i <= 100; i++) {
            let numeros = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            this.lista.push(numeros); 
        }
    }
    
    exibirListaComNumerosGerados(){
        console.log(this.lista.join(" "));   
    }

    main(){
        this.geraNumeros();
        this.exibirListaComNumerosGerados()
    }
}

let gerador = new GerarNumerosAleatorios();
gerador.main();