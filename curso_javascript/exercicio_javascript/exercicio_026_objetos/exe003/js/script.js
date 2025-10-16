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
            let listaLivros = '';
            for(let i = 0; i < this.livros.length; i++){
                let mostrarLivros = this.livros[i];
                listaLivros += `<p>Titulo do Livro ${i + 1}º: ${mostrarLivros.titulo}</p>`;  
            };
            
            return listaLivros;
        }

        
    };
    
let exibirLivros = document.getElementById("mostrarLivros");
const nomeLivro = prompt('Insira o nome de um Livro: ');
const nomeAutor = prompt('Insira o nome do Autor: ');
const anoLivro = prompt('Insira o ano do Livro: ');


biblioteca.adicionarLivros(nomeLivro, nomeAutor, anoLivro);
biblioteca.listarLivros();
exibirLivros.innerHTML = biblioteca.listarLivros();