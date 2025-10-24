// Estrutura de dados Map.
// Exemplo de uso.
const pessoas = [ // Recebendo arrays de uma base de dados.
    { id: 3, nome: 'Anderson' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
];


// Problema é que os numbers esta como string e a ordem foi alterada.
// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

/*
    Criando um new map, nesse caso utilizamos get e set.
    set => Criar o valor ou configurar o valor.
    get => Obtem o valor.

*/
// Dessa forma a ordem de inserção mantém.
const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

//console.log(novasPessoas.get(52)) //Para obter o valor utilizamos get.

// for (const pessoas of novasPessoas.keys()) { // Vem somente as chaves.
//     console.log(pessoas);
// }

// Deletando a chave 2.
novasPessoas.delete(2);
console.log(novasPessoas);


