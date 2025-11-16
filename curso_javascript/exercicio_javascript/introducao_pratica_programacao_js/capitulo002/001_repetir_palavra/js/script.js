/*
    Escreva um programa que peça ao usuário para digitar uma palavra e depois a imprima 25 vezes (cada uma em uma linha separada).
*/

// Pedir o usuário para digitar uma palavra.
class Palavra {
    constructor(palavraUsuario) {
        this.palavraUsuario = palavraUsuario;
    }

    solicitarPalavraUsuario(){
        const palavra = prompt('Digite uma palavra: ');

        if(palavra === null || palavra.trim() === '' || palavra.length < 2){
            alert('Palavra inválida, por favor digite uma palavra válida.');
            this.solicitarPalavraUsuario();

        } else {
            this.palavraUsuario = palavra;
        }
    }

    repetirPalavra(palavra){
        const mostrarPalavra = document.querySelector('#mostrar');
        let palavraTexto = '';

        for(let i = 1; i <= 25; i++){
            if(i < 10){
              i = `0${i}`;  
            }

            palavraTexto += `${i} - ${this.palavraUsuario} <br>`;
        }
        
        mostrarPalavra.innerHTML = '<h1>Palavra digitada repetida 25 Vezes.</h1>' + palavraTexto;
    }

}

const palavraInformada = new Palavra();

palavraInformada.solicitarPalavraUsuario();
palavraInformada.repetirPalavra();
