// Escopo Léxico

// Variável Global.
const nome = 'Anderson';

// Função conhece o local onde foi declarada, vai procurando para cima até encontrar.
function falaNome(){
    console.log(nome);
}

//Função continua lembrando onde foi declarada.
function usaFalaNome(){
    const nome = 'Basilio'; // Função continua lembrando onde foi declarada, ira mostrar 'Anderson'
    falaNome();
}

// Irá retornar a variável dentro do escopo da função.
usaFalaNome();