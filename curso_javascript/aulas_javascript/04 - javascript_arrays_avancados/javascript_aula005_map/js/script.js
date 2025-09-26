// Função map é similiar a função filter, na map altera os valores do array.
/*
    Diferença do filter é que será retornar o valor retorna true
    para quando queria adicionar o valor no novo array e false para quando não queriamos adicionar o valor no novo array. Ja em map retornamos com o valor diferente.

    Função map terá sempre o mesmo tamanho que o valor do array original.

    map mexe no array, objeto original se não quisermos mexer no array original 
    para fazer uma copia utilizar [...]

*/

//               0  1   2   3  ....
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// Dobrando os valores do array números.
//const numerosDobrados = numeros.map(valor => valor * 2);

//console.log(numerosDobrados);

/*
    Utilizando objetos com map
    Para cada elemento:
    Retorne apenas string com o nome da pessoa.
    Remova apenas a chave "nome" do objeto.
    Adicione uma chave id em cada objeto.

*/

const pessoas = [
    {nome: 'Anderson', idade: 23},
    {nome: 'Maria', idade: 55},
    {nome: 'Eduardo', idade: 43},
    {nome: 'Leticia', idade: 13},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 53},
];

// Retorne apenas string com o nome da pessoa.
const nomes = pessoas.map(obj => obj.nome);

// Remova apenas a chave "nome" do objeto.
const idades = pessoas.map(obj => ({ idade: obj.idade }));


// Adicione uma chave id em cada objeto.
//const comIds = pessoas.map((obj, indice) => obj.id = indice + 1);


// Para não mexer no array original
const comIds = pessoas.map(function(obj, indice){
    const novoObj = {...obj}
    novoObj.id = indice + 1;
    return novoObj;
})

console.log(pessoas);
console.log(comIds)

