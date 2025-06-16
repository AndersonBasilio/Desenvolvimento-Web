/*
    Array é uma lista de coisas, boa pratica é aconselhavel ter um tipo de dado.
    Array são indexados por elementos.
    Ex:
                         0           1                 2
        const alunos = ['Anderson', 'James Hetfield', 'Freddie Mercury'];

        * Acessando os arrays pelo indices
        console.log(alunos[0]);
        console.log(alunos[1]);

        * Alterando o indice
        alunos[0] = 'Rob'

        * Adicionando elementos no array.
        alunos[0] = 'João'
            - Adicionando elementos no final do array
            alunos[alunos.length] = 'Jurema';

            - Função que adiciona elemento no final do array
            alunos.push('Mercês');

            - Função que adiciona no começo
            alunos.unshift('Brain May');

        * Removendo elemento do final do array
            - alunos.pop(); Removendo item no final.
            - const removido = alunos.pop() -> Salvando o aluno removido em uma variável.  
            
        * Removendo elemento no inicio do array
            - alunos.unshift(); Removendo item no inicio
            - const removido = alunos.unshift() -> Salvando aluno removido em uma variável. 

        * Apagando indice do array
            - delete alunos[1] -> Informamos o indice que desejamos apagar.

        * Podemos acessar um indice que não existe
            console.log(alunos[50]); -> Retornará undefined

        * Fatiando lista de array usanso slice
            console.log(alunos.slice(0, 2));
            console.log(alunos.slice(0, -2)); Utilizando indices negativos

        * Retorna um object
            console.log(typeof(alunos));

            - Para sabermos se é um array
            console.log(alunos instanceof Array) -> Retornará true ou false.


*/

const alunos = ['Anderson', 'James Hetfield', 'Freddie Mercury'];

console.log(alunos instanceof Array)