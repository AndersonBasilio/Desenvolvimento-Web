// Paradigma de Orientação a Objetos
class Cadeira {
    //Definindo os atributos com seus respectivos tipos
    quantidade_pernas: number;
    giratoria: boolean;
    cor: string;

    //Construtor com parametros tipados
    constructor(quantidade_pernas:number, giratoria:boolean, cor:string){
        this.quantidade_pernas = quantidade_pernas;
        this.giratoria = giratoria;
        this.cor = cor;

    }

    girarCadeira(): void{
        if(this.giratoria === true){
            console.log('Girou.');
        } else {
            console.log('Essa cadeira não é giratória.');
        }
    }
}

let cadeira = new Cadeira(4, false, 'azul');
let cadeira2 = new Cadeira(2, true, 'verde');

//Criando array

console.log(cadeira);
cadeira2.girarCadeira();