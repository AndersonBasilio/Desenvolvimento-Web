const numero = 10;

// (if) Se (numero >= 0 && numero <= 5) ocorrer, faça isso {codigo}.
// (else) Se não faça isso {codigo}

if(numero >= 0 && numero <= 5){
    console.log('O número esta entre 0 e 5.');
} else if(numero >= 6 && numero <= 8){
    console.log('O número esta entre 6 e 8.');
} else if(numero >= 9 && numero <= 11){
    console.log('O número esta entre 9 e 11.'); // Encontrou o verdadeiro ira executar o bloco de codigo.
} else {
    console.log('O número NÃO esta entre 0 e 11.');
}