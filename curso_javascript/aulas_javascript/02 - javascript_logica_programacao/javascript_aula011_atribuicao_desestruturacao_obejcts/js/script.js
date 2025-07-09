// Atribuição via desestruturação

// Criando um obejto que precisamos utilizar chaves.
const pessoa = { 
    nome: 'Anderson',
    sobrenome: 'Basilio',
    idade: 30,
    endereco: {
        rua: 'Joaquim Juarez Mota',
        numero: 320,
        bairro: 'Jardim Petropolis'
    }
};

// Uma forma seria com a anotação de ponto (console.log(pessoa.nome);)
// Jogando informação em uma variável (const nome = pessoa.nome;) - Atribuição normal

// Atribuição via desestruturação, passamos um objeto e pedindo para extrair.
//const { nome, sobrenome, idade } = pessoa;

//Quando uma informação no objeto não exista retornará (undefined), podemos setar um valor padrão. Mesmo com valor padrão pega o valor.
//const { nome = 'Nome não informado', sobrenome, idade } = pessoa;

//Mudando o nome da variável nome: para teste
//const { nome: teste = '', sobrenome } = pessoa;

//Pegando informação dentro do outro objeto que esta dentro do objeto.
// Dessa forma podemos pegar o endereço completo dentro do objeto { endereco }
// Podemos colocar uma valor padrão desta forma. {rua: r = 12345}
//const {endereco: { rua, numero }, endereco } = pessoa;


//Utilizando o operador ...(Rest)
const {nome, idade, ...resto} = pessoa;
console.log(nome, idade, resto);