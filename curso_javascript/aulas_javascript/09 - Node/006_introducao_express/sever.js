/*
    ==============================
          Introdução Express
    ==============================

    OBS: Para criar uma pasta e arquivo fazemos da seguinte forma no VScode
        - Criar a pasta já criando o arquivo.
        - nome da pasta/nome do arquivo com a extenção.
            006_introducao_express\server.js  

    Criando servidor com Express
        - Temos que acessar a pasta da aula pelo terminal.
        - Seguintes formas:
            - Abrir a pasta da respectiva pasta com VSCode
                File /  Open Folder / Escolher a pasta.
            
            - Abrir o Terminal no VSCode
                Terminal 
                    cd + nome da pasta

            - Terminal do Windows.
                - Abrir prompt do windows
              
    - Inicializar o npm 
        - No terminal no VSCode 
            - Acessar a pasta do projeto
            - Comando npm init -y
            - Instalar express: npm install express

    
    - Metódos do Express
                Criar , Ler , Atualizar, Apagar
        CRUD -> CREATE, READ, UPDATE,    DELETE
                POST  , GET ,  PUT  ,    DELETE

*/  

// Importar o express
const express = require('express');

// Para executar, por convenção criamos uma variável que se chama app
const app = express(); // Executando

/*
    Express irá ajudar trabalhar nas rotas, quando acessamos a barra fazemos um GET (/)
    Site: http://meusite.com/sobre <- GET -> Entregue a página/sobre
*/

/* 
    Utilizando
        app.get(recebemos rota, função que vamos executar recebe dois parametros req referente o que estou pedindo, res o que vou mandar para o servidor => {})

*/
app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
            Nome: <input type="text" name"nome">
            <button>Enviar</button>
        </form
    `);
});

// Recebendo com POST
app.post('/', (req, res) => {
    res.send('Recebi o Formulário.')

})

// Criando outra rota, caso não existe a rota ("cannot GET / rotas")
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!');
})

// Servidor ouvindo requisição, usar portas que não tem coisas rodando.
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000'); // Cria um link
    console.log('Servidor executando na porta 3000');
});


