/*

    Crie um objeto carro com propriedades marca, modelo e ano. 
    Depois, faça um método que mostre todas as informações no console.

*/

let carros = {
    marca: 'FIAT',
    modelo: 'Uno Way Economy Fire',
    ano: 2013,


    mostrarInformacoes(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
};

carros.mostrarInformacoes();