/*
    Variáveis criadas no módulo. Somente serão acessíveis em outros arquivos
    se forem exportadas explicitamente abaixo.
*/
const nome = 'Anderson';
const sobrenome = 'Basilio';
const idade = 30;

/*
    Exportação nomeada de função.
    Ao importar, será necessário usar chaves:
        import { soma } from './arquivo.js';
*/
export function soma(x, y) {
    return `${x} + ${y} = ${x + y}`;
}

/*
    Export default: cada módulo pode ter apenas um.
    Não precisa usar chaves para importar e quem importa escolhe o nome:
        import minhaFuncao from './arquivo.js';
*/
export default (x, y) => `${x} x ${y} = ${x * y}`;

/*
    Variáveis não exportadas não ficam acessíveis fora do módulo.
    Elas não são “privadas” no sentido de classes, apenas não são exportadas.
*/
const cpf = '123.456.789-98';

/*
    Exemplos de diferentes formas de exportação:

    1) Exportação de múltiplos itens:
        export { nome, sobrenome, idade, soma };

    2) Exportando com alias:
        export { nome as nome2, sobrenome };

    3) Exportando diretamente na declaração:
        export const nome = 'Anderson';
        export function soma(...) { ... }

    4) Exportando classes:
        export class Pessoa { ... }

    5) Export default usando alias:
        export { soma as default };

    6) Arrow function como export default:
        export default (x, y) => x * y;
*/

