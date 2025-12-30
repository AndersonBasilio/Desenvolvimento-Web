// mod2.js

/*
    Módulo responsável por reexportar a classe Cachorro.

    Este arquivo está dentro da pastaZ.
    Para acessar arquivos fora dessa pasta, utilizamos ../ para voltar diretórios.
*/

// ======================
// NAVEGAÇÃO ENTRE PASTAS
// ======================

/*
    ../       -> Volta uma pasta
    ../../    -> Volta duas pastas

    Estrutura do caminho utilizado abaixo:

    pastaZ
    └── ../pastaB/pastaC/pastaD/mod.js
*/

// Importando a classe Cachorro localizada em outra pasta
const Cachorro = require('../pastaB/pastaC/pastaD/mod');

// ======================
// EXPORTAÇÃO DO MÓDULO
// ======================

// Exportando a classe para que outros arquivos possam utilizá-la
module.exports = Cachorro;