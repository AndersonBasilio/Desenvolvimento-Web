/*
    Se você tem um triângulo retângulo com base x e altura y, usar atan2(y, x) (da biblioteca math) encontra um dos ângulos do triângulo em radianos.
    Use degrees() para converter o resultado para graus.
    Escreva um programa que peça x e y e exiba o ângulo em graus, arredondado para uma casa decimal.

*/

class CalcularTangenteTringulo {

    constructor(base, altura){
        this.altura = altura;
        this.base = base;
    }

    solicitarAlturaBase(){
        const base = Number(prompt('Informe a BASE: '));
        const altura = Number(prompt('Informe a ALTURA: '));

        if(isNaN(altura) || isNaN(base) || (base === 0) || altura === 0){
            alert('Por favor, informe a base e altura sendo maior que ZERO.');
            return this.solicitarAlturaBase();
        }

        this.base = base;
        this.altura = altura;

        console.log(`Base: ${base} e Altura ${altura}.`);
        return { base, altura};
    }

    calcularTangente() {
        const angulo = Math.atan2(this.altura, this.base);
        this.angulo = angulo;

        return angulo;
    }

    converterGraus() {
        const graus = this.angulo * (180 / Math.PI);

        this.graus = graus;
        return graus;
    }

    mostrarResultado() {
        const resultado = document.querySelector('#resultado');
        const linhas = [
            '    *',
            '    **',
            ' y  ***',
            '    ****',
            '    *****',
            '    *******',
            '       x   '
        ];

        resultado.innerHTML += '<pre>' + linhas.join('\n') + '</pre>';

        resultado.innerHTML += 
            '<i><h3>' +
            'Altura: ' + this.altura +
            '<br>Base: ' + this.base +
            '<br>Ângulo em Radianos: ' + this.angulo.toFixed(4) +
            '</h3></i>';

        resultado.innerHTML += 
            '<i><h3>Ângulo convertido em graus: ' + this.converterGraus().toFixed(1) + '°.</h3></i>';
    }

    main(){
        this.solicitarAlturaBase();
        this.calcularTangente();
        this.mostrarResultado();
    }
}

const triangulo = new CalcularTangenteTringulo();
triangulo.main();
