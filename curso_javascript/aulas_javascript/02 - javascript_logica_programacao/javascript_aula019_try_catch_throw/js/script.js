// Não é aconselhavel deixar o erro na tela para o usuário ver.

// try {
//     // Bloco significa tentar executar
//     console.log(naoExiste);
// } catch(err) {
//     console.log('nãoExisto não existe.');
// }

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){

        //Para lançar um novo erro utilizamos throw new Error
        //throw('x e y precisam ser números.');
        throw new ReferenceError('x e y precisam ser números.'); // Irá lançar um erro como se fosse o d JS
        
    }
    
    return x + y;
}

//Podemos tratar o erro, criando um try e catch.
try{
    console.log(soma(5, 2)); 
    console.log(soma('5', 2)); 
} catch(error){
    //console.log(error);
    console.log('Lançar alguma coisa mais amigavel para o usuário.');
}