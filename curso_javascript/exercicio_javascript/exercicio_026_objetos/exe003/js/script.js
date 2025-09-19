/*
    Exercício 3 - Biblioteca

    Crie um objeto chamado biblioteca que tenha:

    Uma propriedade livros, que é um array de objetos (cada livro tem titulo, autor, ano).

    Um método chamado adicionarLivro que recebe os dados de um livro e adiciona na lista.

    Um método chamado listarLivros que mostra no console todos os títulos.
*/

let biblioteca = {
    livros: [
        {
            titulo: 'Vendendor de Sonhos',
            autor: 'Augusto Cury',
            ano: 2001
        },

        {
            titulo: 'Eu Sou OZZY',
            autor: 'Ozzy Osbourne',
            ano: 2012
        }

    ],

    adicionarLivros(titulo, autor, ano){
        let novoLivro = {
            titulo,
            autor,
            ano
        };

        this.livros.push(novoLivro);

    },

    listarLivros(){
        for(let i = 0; i < this.livros.length; i++){
            let mostrarLivros = this.livros[i];
            console.log(`Titulo do Livro ${i + 1}º: ${mostrarLivros.titulo}`);  
        };
    }
    
};

biblioteca.adicionarLivros('Diario de um Mago', 'Paulo Coelho', 2002);
biblioteca.adicionarLivros(' A Life, In His Own Words', 'Freddie Mercury', 2006);
biblioteca.listarLivros();