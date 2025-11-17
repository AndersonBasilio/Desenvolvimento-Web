/*
    Escreva um programa que peça uma altura em polegadas e exiba quantos pés e polegadas ela tem.
    Há 12 polegadas em um pé.
    Por exemplo: 40 polegadas = 3 pés e 4 polegadas.
    [Dica: use // e % para obter as partes.]

*/

//const polegadas = 40;

//const pesPolegadas = (pes / polegadas) * 10;

//console.log(polegadas + ' Polegadas = ' + pesPolegadas + ' pés' + ' e ' + polegadas % pes + ' Polegadas. ');

class Polegadas {
    constructor(alturaPolegadas) {
        this.alturaPolegadas = alturaPolegadas;
    }

    solicitarAltura() {
        let alturaPolegadasUsuario = Number(prompt('Insira a altura em polegadas: '));

        while (isNaN(alturaPolegadasUsuario) || alturaPolegadasUsuario < 0) {
            alert('É aceito apenas números.');
            alturaPolegadasUsuario = Number(prompt('Insira a altura em polegadas: '));
        }

        this.alturaPolegadas = alturaPolegadasUsuario;
        return this.alturaPolegadas;
    }

    calcularPesPolegadas() {
        const pes = 12;
        const calPesPolegadas = Math.floor(this.alturaPolegadas / pes);
        const polegadas = this.alturaPolegadas % pes;

        this.polegadas = polegadas;
        this.calPesPolegadas = calPesPolegadas;

        return { polegadas, calPesPolegadas };
    }

    exibirPesPolegadas() {
        const exibirParaUsuario = document.querySelector('#resultado');

        exibirParaUsuario.innerHTML = `<h3><i>${this.alturaPolegadas} Polegadas  =  ${this.calPesPolegadas} pés e ${this.polegadas} Polegadas.</i></h3>`;
    }

    main(){
        this.solicitarAltura();
        this.calcularPesPolegadas();
        this.exibirPesPolegadas();
    }
}

const pesPolegadas = new Polegadas();
pesPolegadas.main();