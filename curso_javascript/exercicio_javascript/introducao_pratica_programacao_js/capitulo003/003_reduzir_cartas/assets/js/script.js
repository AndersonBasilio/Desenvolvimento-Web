/*
    Em alguns jogos de tabuleiro, você precisa reduzir o número de cartas que possui pela metade, arredondando para baixo.
    Por exemplo, se você tem 10 cartas, reduz para 5; se tem 11, também reduz para 5; se tem 12, reduz para 6.
    Escreva um programa que pergunte ao usuário quantas cartas ele tem e mostre o total após a redução.

*/

class SolicitarQuantidadeCartas {
    constructor(cartas) {
        this.cartas = cartas;
    }

    // Solicitar cartas ao usuario
    solicitarCartasUsuario(){
        const cartasUsuario = Number(prompt('Informe a quantidade de cartas? '));

        if(cartasUsuario <= 0 || isNaN(cartasUsuario)){
            alert('Por favor, informe a quantidade de cartas. Não pode ser menor ou igual a zero.');
            return this.solicitarCartasUsuario();
        }

        this.cartas = cartasUsuario;
        
    }

    // Reduzir cartas
    reduzirCartas(){   
        return Math.floor(this.cartas / 2);
    }

    // Exibir para usuário.
    exibirUsuario(cartasReduzidas){
        const exibirParaUsuario = document.querySelector('#resultado');
        exibirParaUsuario.innerHTML = `<h3><i>Total de cartas após redução é ${cartasReduzidas}</i></h3>`
    }
    
}

const cartasUsuario = new SolicitarQuantidadeCartas();
cartasUsuario.solicitarCartasUsuario();

const reduzidas = cartasUsuario.reduzirCartas();
cartasUsuario.exibirUsuario(reduzidas);

