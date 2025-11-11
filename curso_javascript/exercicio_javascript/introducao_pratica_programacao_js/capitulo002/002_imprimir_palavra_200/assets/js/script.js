/*
    Escreva um programa que peça ao usuário uma palavra e depois a imprima 200 vezes na mesma linha. 

*/

class Palavra {
    constructor(palavra){
        this.palavra = palavra;
    }

    solicitarPalavra(){
        const palavra = prompt('Informe uma palavra: ');
        
        if(palavra.length < 2 || palavra.trim() === ''){
            alert('Digite uma palavra, por favor.')
            return this.solicitarPalavra();            
        }
        
        this.palavra = palavra;
        return palavra;
    }

    imprimir(vezes){ 
        let resultado = document.querySelector('#resultado');  
        let palavraRepitida = Array(vezes).fill(this.palavra); 

        resultado.innerHTML = 'Palavras repetidas ' + vezes + ': ' + ' ' + palavraRepitida.join(' ');  
    }
}

let palavraSolicitada = new Palavra();

palavraSolicitada.solicitarPalavra();
palavraSolicitada.imprimir(200);