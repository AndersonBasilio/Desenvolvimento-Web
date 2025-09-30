/*

    🔹 Exercício 1 (Nível Médio) – Classificação de notas

        Crie um programa em JavaScript que receba uma nota (0 a 100) e classifique o resultado conforme a tabela:

        A → nota maior ou igual a 90

        B → nota entre 80 e 89

        C → nota entre 70 e 79

        D → nota entre 60 e 69

        F → nota abaixo de 60

        👉 Use if/else if/else para implementar a lógica e exibir no console o conceito correspondente.

*/


let nota = Number(prompt('Informe uma nota entre 0 a 100: '));

if(nota < 0 || nota > 100){
    alert(`Nota Informada não é permitida.`);

// A → nota maior ou igual a 90
} else if(nota >= 90){
    alert('Nota é maior ou igual a 90');

// B → nota entre 80 e 89
} else if(nota >= 80 && nota < 90){
    alert('Nota é entre 80 e 89.');

// C → nota entre 70 e 79
} else if(nota >= 70 && nota < 80){
    alert('Nota entre 70 e 79');

// D → nota entre 60 e 69
} else if(nota >= 60 && nota < 70 ){
    alert('Nota entre 60 e 69');
}
// F → nota abaixo de 60
else {
        alert('Nota abaixo de 60');
}