/*
    Javascript é baseado em protótipos para passar propriedades em métodos
    de um objetos para outro

    Definição de protótipo
    Protótipo é um termo usado para se referir ao que foi criado pela primeira vez, servindo
    de modelo ou molde para futuras produções.

    Todos os objetos tem uma referêcia interna para um protótipo (__proto__)
    que vem da propriedade prototype da função interna construtora que foi usada
    para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
    do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
    de protótipos é usada ate o topo (null) até encontrar (ou não) tal membro. 

*/


// Construtora -> Molde (classe)
function Pessoa(nome, sobrenome){
    // Podemos chamar de atributo
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Metodo que retorna o nome completo.
    // this.nomeCompleto = () => `${this.nome} ${this.sobrenome};`  // Se criamos muitos metodos sobrecarrega recurso de memoria no computador do cliente.


}

// Instâncias
/*
    Toda vez que precisamos criar um objeto que venha de uma função
    o javascript já linca automaticamente uma propriedade construtora que se chama prototype.


*/
const pessoa1 = new Pessoa('Anderson', 'Basilio'); // <- Pessoa = Função Construtora.

// pessoa2 também terá o prototype.estouAqui. 
const pessoa2 = new Pessoa('Maria', 'Oliveira'); // <- Pessoa = Função construtora.
const data = new Date(); // <- Função construtora

// Criamos alguma coisa dentro do prototype da pessoa. (prototype ja esta atrelado)
// Estará dentro do __proto__ sobrescreve
// Temos uma cadeia -> Vai buscar: pessoa1 -> Pessoa.prototype -> Obeject.prototype(Esse é o pai)
Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome};`
}; 

console.dir(pessoa1);
console.dir(data);