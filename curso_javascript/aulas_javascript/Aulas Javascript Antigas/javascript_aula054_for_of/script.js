// For classico = Geralmente usado com iteravéis (array ou strings)
// For in = Retorna o indice ou chave (String, arrays ou objeto)
// For of = Retorna o valor em si (iteravéis, array ou string)
// Dependendo do for utilizar (Para array qualque um dos tres irá funcionar.)
// Para objetos utilizamos FOR IN

//             0123....
/*const nomes = ['Anderson Basilio', 'James Hetfield', 'Lars Ulrich'];

console.log('For Classico');
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('------------------------');

console.log('For in');
for(let i in nomes){
    console.log(nomes[i]);
}

console.log('------------------------');

console.log('For Of');
for(let valor of nomes){
    console.log(valor);
}

console.log('------------------------');

console.log('ForEach');
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
}); */

const pessoa = {
    Nome: 'Anderson',
    Sobrenome: 'Basilio'
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
