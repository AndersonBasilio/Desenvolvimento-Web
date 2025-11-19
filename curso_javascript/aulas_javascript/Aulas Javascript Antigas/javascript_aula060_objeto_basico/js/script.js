//Basico de Objetos

//Podemos criar obejto dessa maneira

//const não podemos reatribuir o valor
//Ex: array = 1;
/*const array = [1, 2, 3];
array.push(4);
array = 0;*/

/*
//Criando objeto pessoa01, estão relacionado entre si
const nome01 = 'Anderson';
const sobrenome01 = 'Basilio';
const idade01 = 55;

//Criando objeto pessoa02
const nome02 = 'James';
const sobrenome02 = 'Hetfield';
const idade02 = 35;*/

// Melhor forma e criando um objeto, mas mesmo assim não é uma boa pratica para criar um obejto utilizamos {}
//nome é atributo
//Anderson é o valor.
/*const pessoa01 = {
    nome: 'Anderson',
    sobrenome: 'Basilio',
    idade: 32
};

//acessando o nome da pessoa, sobrenome e idade
console.log(`Sou ${pessoa01.nome} ${pessoa01.sobrenome} e tenho ${pessoa01.idade}.`);*/

//Podemos criar uma função que cria os objetos
//Quando criamos na função chama-se parametro
//function criaPessoa(nome, sobrenome, idade){
    //return {
        /*
        nome: nome,
        sobrenome: sobrenome,
        idade: idade

        //Melhor pratica de programação seria dessa forma.
        //Javascript sabe que é para criar os valores.
//      nome,
//      sobrenome,
//      idade
//  };
//}

//Quando enviamos um valor para o paramentro é argumento.
const pessoa01 = criaPessoa('Anderson', 'Basilio', 25);
const pessoa02 = criaPessoa('James', 'Hetfield', 55);
const pessoa03 = criaPessoa('Freddie', 'Mercury', 75);
const pessoa04 = criaPessoa('Brian ', 'May', 85);

console.log(pessoa01.nome, pessoa01.sobrenome, pessoa01.idade);
console.log(pessoa02.nome, pessoa02.sobrenome, pessoa02.idade);
console.log(pessoa03.nome, pessoa03.sobrenome, pessoa03.idade);
console.log(pessoa04.nome, pessoa04.sobrenome, pessoa04.idade);*/

//Usando this podemos referenciar qualque atributo dentro do metodo
const pessoa01 = {
    nome: 'Anderson',
    sobrenome: 'Basilio',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome}, minha idade atual é ${this.idade}`);
    },
    //Icrementando valor na idade
    icrementaIdade(){
        this.idade ++;
    }
}

pessoa01.fala();
pessoa01.icrementaIdade();
pessoa01.fala();
pessoa01.icrementaIdade();
pessoa01.fala();
pessoa01.icrementaIdade();
pessoa01.fala();
pessoa01.icrementaIdade();

