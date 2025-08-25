// Funcoes Construtoras -> Retorna Objetos
// Funções Fabricas -> Fabrica Obejtos
// Funções construtora -> Pessoa (new), precisamos usar a palavra new.

// Inicia o nome da função com letra maiúscula
function Pessoa(nome, sobrenome){

    /*
        Atributos privados é quando precisamos somente dentro da função, não preciso que esteja disponivel do lado de fora.
    */
    const ID = 123456;

    // Criando um método interno.Ex: validar um CPF
    const metodoInterno = function() {

    };

    //Referindo a pessoa, atributos ou metodos.
    this.nome = nome
    this.sobrenome = sobrenome;
    
    // É uma função dentro do objeto.
    this.metodo = function (){
        console.log(`${nome} ${sobrenome}: Sou um método.`);
    }
    
}

/* 
    Palavra (new) cria outro objeto vazio e faz o this apontar para o objeto que esta sendo utilizado, desta forma não irá precisar usar o return.

*/
const p1 = new Pessoa('Anderson', 'Basilio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
p2.metodo();