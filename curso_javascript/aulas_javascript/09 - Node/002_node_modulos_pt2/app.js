// app.js

/*
    Importações de módulos no arquivo app.js

    O require pode importar:
    - Funções
    - Arrow Functions
    - Classes
    - Objetos
    Tudo depende de como o módulo foi exportado.
*/

// ======================
// EXEMPLO: IMPORTAÇÃO DE FUNÇÃO
// ======================

// const multiplicacao = require('./mod');
// console.log(multiplicacao(2, 2));


// ======================
// EXEMPLO: IMPORTAÇÃO DE CLASSE
// ======================

// Podemos utilizar qualquer nome para a variável que recebe o módulo.
// O nome não precisa ser o mesmo do arquivo exportado.

// const ImportandoClasse = require('./mod');
// const cachorro1 = new ImportandoClasse('Bob');

// cachorro1.latir();


// ======================
// NAVEGAÇÃO ENTRE PASTAS
// ======================

/*
    ./  -> Representa a pasta atual (onde o arquivo app.js está)
    ../ -> Volta uma pasta no diretório

    Exemplo de caminho:
    './pastaB/pastaC/pastaD/mod'
*/

// const ImportandoClasse = require('./pastaB/pastaC/pastaD/mod');
// const cachorro1 = new ImportandoClasse('Bob');

// cachorro1.latir();


// =================================
// IMPORTANDO MÓDULO DE OUTRA PASTA
// =================================

// const Cachorro = require('./pastaZ/mod2');
// const cachorro2 = new Cachorro('Zéus');

// cachorro2.latir();


// ======================
// __filename e __dirname
// ======================

/*
    __filename -> Retorna o caminho completo do arquivo atual
    __dirname  -> Retorna o caminho completo da pasta onde o arquivo está

    Para manipular caminhos de forma segura entre sistemas operacionais
    (Windows, Linux, Mac), utilizamos o módulo path.
*/

// const path = require('path');

// console.log(__filename);
// console.log(__dirname);

// path.resolve monta um caminho absoluto independente do sistema operacional
// console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));


// ===================================
// IMPORTAÇÃO COM EXTENSÃO DO ARQUIVO
// ===================================

/*
    A extensão (.js) é opcional no require,
    mas pode ser usada para deixar explícito qual arquivo está sendo importado.
*/

const Cachorro = require('./pastaZ/mod2.js');
const cachorro2 = new Cachorro('Zéus');

cachorro2.latir();