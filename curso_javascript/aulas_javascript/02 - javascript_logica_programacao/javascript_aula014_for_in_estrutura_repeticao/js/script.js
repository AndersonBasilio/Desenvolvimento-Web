// For in temos obejtos ou listas (object / array) indexado automaticamente;
// Quando um array não tem outras listas, chamamos de vetor.
const frutas = ['Pera', 'Uva', 'Maçã'];

// Iterando pelo array
console.log('FOR Classíco.')
for(let i = 0; i < frutas.length; i++){
    console.log(i, frutas[i]);
}

console.log('');
console.log('FOR in');

//Lê os indices do array
//For in -> Lê os indices(array ou vetor) ou chaves do objeto
for (let indice in frutas){
    console.log(frutas[indice]);
}

// Utilizando For in com objetos
console.log('');
console.log('Utilizando com FOR in com objetos');
const pessoa = {
    nome: 'Anderson',
    sobrenome: 'Basilio',
    idade: 33
};

// Para acessar nome em pessoa fazemos da seguinte forma
//console.log(pessoa.nome);
//console.log(pessoa['nome']); // Acessando o mesmo valor de maneira diferente.

//Exemplo
//const chave = 'nome'
// Dessa forma estamos acessando a chave dentro do objeto
//console.log(pessoa[chave]) // Colocamos a variável.

for (let chave in pessoa){
    console.log(chave, pessoa[chave]); // Pegando a chave dentro do objeto.
}