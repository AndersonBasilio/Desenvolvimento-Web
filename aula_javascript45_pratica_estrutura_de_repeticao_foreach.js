//var listaFuncionarios = ['Anderson', 'Angela', 'Maria', 'Pedro', 'Lucas'];

var listaFuncionarios = Array();
listaFuncionarios[0] = 'Anderson'
listaFuncionarios['a'] = 'Angela'
listaFuncionarios[false] = 'Maria'
listaFuncionarios[26] = 'Pedro'
listaFuncionarios[-2] = 'Lucas'

var f = function(valor, indice){
    console.log(indice + '-> ' + valor);
}

listaFuncionarios.forEach(f);

/*
console.log(listaFuncionarios[4]);
document.write(listaFuncionarios[4]);

listaFuncionarios.forEach(function(valor, indice, array) {
    //Lógica
    console.log('Índice: ' + indice  + ' | ' + 'Valor: ' + valor);
    
    if(valor == 'Lucas'){
        array[indice] = 'Novo Valor';
    }
});

console.log(listaFuncionarios);
document.write('<br>' + listaFuncionarios[4]);
*/