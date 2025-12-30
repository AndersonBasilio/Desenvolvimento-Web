// mod.js

/*
    Este módulo demonstra diferentes formas de exportação no Node.js.

    Podemos exportar diretamente:
    - Funções
    - Classes
    - Objetos

    O que será exportado depende do valor atribuído a module.exports.
*/


// ======================
// EXEMPLO: EXPORTAÇÃO DE FUNÇÃO
// ======================

/*
    Ao sobrescrever o module.exports com uma função,
    o módulo passa a exportar diretamente essa função.
*/

// module.exports = function (x, y) {
//     return `${x} x ${y} = ${x * y}`;
// };

/*
    Essa função pode ser executada diretamente dentro do próprio arquivo
    ou quando o módulo for importado em outro arquivo.
*/

// console.log(module.exports(2, 2));


// ======================
// EXEMPLO: EXPORTAÇÃO DE CLASSE
// ======================

/*
    Neste exemplo, o módulo exporta uma classe.
    Ao importar este arquivo, teremos acesso direto à classe Cachorro.
*/

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está latindo.`);
    }
};