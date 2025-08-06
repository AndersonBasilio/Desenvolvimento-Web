// IIFE -> Immediately Invoked Function Expression

// Queremos fujir do escopo global, nao poluir escopo global
//No casso abaixo a função criada toca o escopo global.
// function qualquerCoisa(){
//     console.log(123456789);

// }

// qualquerCoisa();


// Função invocada automaticamente.
// Abrimos os ()parenteses e colocamos uma função anonima e posterior chamamos a função.
// Protejemos o codigo 

//        São parâmetros que passamos.
(function(idade, peso, altura){
    // const nome = 'Anderson';
    // console.log(nome);

    const sobrenome = 'Basilio';
    function criaNome(nome){
        return `${nome} ${sobrenome}` 
    }

    function falaNome(){
        console.log(criaNome('Anderson'))
    }

    falaNome()
    console.log(peso, idade, altura);

// São os argumentos que foi passado.
})(32, 90, 1.89);

// Não terá interferencia com o codigo dentro da função.
const nome = 'Qualquer coisa';