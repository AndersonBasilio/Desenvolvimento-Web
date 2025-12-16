// Importação de módulos no Node.js utilizando o require

// Exemplo de importação simples de um módulo local
// const mod1 = require('./mod1');

// Exemplo de desestruturação ao importar um módulo
// const { nome, sobrenome, saudacao } = require('./mod1');

// console.log(nome, sobrenome);
// console.log(saudacao);

// Módulo nativo do Node.js para trabalhar com caminhos de arquivos
const path = require('path');

/*
    Para utilizar o Axios, é necessário instalar o pacote no projeto.

    Passo a passo:
    1. No terminal, acesse a pasta do projeto
    2. Inicialize o projeto Node.js:
       npm init -y
    3. Instale o Axios:
       npm install axios
*/

// Importando o Axios para realizar requisições HTTP
const axios = require('axios');

// Importando a classe Pessoa utilizando desestruturação
const { Pessoa } = require('./mod1');

// Criando uma instância da classe Pessoa
// const p1 = new Pessoa('Anderson', 'Basilio');

// console.log(p1);
// console.log(p1.saudar());

// Exemplo de requisição HTTP usando Axios
// axios('https://www.otaviomiranda.com.br')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));


