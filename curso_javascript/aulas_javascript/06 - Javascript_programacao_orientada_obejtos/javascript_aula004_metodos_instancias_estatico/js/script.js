/*
    Métodos estáticos são métodos que podemos acessar na classe sem intânciar a classe 
    sem utilizar a palavra (new).

*/
function teste(){
    console.log('Este é meu teste')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste() // Chamando a função no construtor.

    }

    // Método de Instância, tem acesso aos dados da Instância..
    aumentarVolume() { // Qualquer método pode receber valores no parâmetro.
        this.volume += 2;
    }

    // Método de Instância, tem acesso aos dados da Instância.
    diminuirVolume() { // Qualquer método pode receber valores no parâmetro.
        this.volume -= 2;

        if (this.volume < 0){
            console.log('Volume já chegou a 0');
        }
        
    }

    // Queremos que as pilha sejam trocadas de todos os controles.
    // Método Estático.
    static trocaPilha(){ // Qualquer método pode receber valores no parâmetro.

        // console.log(this.volume);  // Retorna undefined, pois não temos acesso aos dados.
        console.log('Ok, irei trocar.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

controle1.diminuirVolume();
controle1.diminuirVolume();
controle1.diminuirVolume();
controle1.diminuirVolume();

//controle1.trocaPilha(); // TypeError: controle1.trocaPilha is not a function

console.log(controle1);

// Método estático referente a classe, dessa forma não temos acesso aos dados da instância.
ControleRemoto.trocaPilha();