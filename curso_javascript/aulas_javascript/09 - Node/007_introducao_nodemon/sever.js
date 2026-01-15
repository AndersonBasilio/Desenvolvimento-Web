/*
    =================================
        Introdução Express + Nodemon
    =================================

    O nodemon facilita o desenvolvimento,
    pois reinicia automaticamente o servidor
    sempre que alguma alteração é feita no código.

    Sem o nodemon, normalmente precisamos:
        - Parar o servidor (CTRL + C)
        - Iniciar novamente após cada alteração

    IMPORTANTE:
        O nodemon NÃO atualiza a página do navegador.
        Após a reinicialização do servidor, é necessário
        atualizar a página manualmente (F5).

    Para utilizar:
        - Abrir o terminal
        - Instalar como dependência de desenvolvimento:
            npm install nodemon --save-dev

    Para executar:
        - Manualmente:
            npx nodemon server.js

    Forma mais prática:
        - Abrir o package.json
        - Em "scripts", criar:
            "start": "nodemon server.js"
        - No terminal executar:
            npm start
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
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            <button>Botao teste 123</button>
        </form>
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


