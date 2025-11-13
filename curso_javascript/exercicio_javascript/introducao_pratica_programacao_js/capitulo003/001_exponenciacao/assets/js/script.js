/*
    Exercícios do Capítulo 3 (Números)

    Escreva um programa que peça ao usuário dois números x e y e depois imprima o resultado de xʸ.
*/

class ExponenciarNumero {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    // Solicitar números ao usuário
    solicitarNumerosUsuario() {
        const numero1 = Number(prompt('Insira o primeiro número: '));
        const numero2 = Number(prompt('Insira o segundo número: '));
    
        if (isNaN(numero1) === true || isNaN(numero2) === true) {
            alert('É aceito apenas números, por favor insira o número correto.');
            
            return this.solicitarNumerosUsuario();
            
        }
        
        this.numero1 =  numero1;
        this.numero2 = numero2;

        return {numero1, numero2}
    }

    // Exibi resultado na tela.
    mostrarResultado(){
        const resultado = document.querySelector('#resultado');
        const x = this.numero1;
        const y = this.numero2;

        resultado.innerHTML = `<h3><i>Resulta da Exponenciação:  ${x}<sup>${y}</sup> = ${x ** y}.</h3>`

    }
}

const numerosUsuario = new ExponenciarNumero();
numerosUsuario.solicitarNumerosUsuario();
numerosUsuario.mostrarResultado();