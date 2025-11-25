/*
    Sempre consultar a documentação oficial da MDN para detalhes completos
    sobre o sistema de módulos ES Modules (import/export).
*/

/*
    Importação a partir do arquivo module1.

    - Import nomeado:
        import { nome, sobrenome } from './module1';

      Os nomes devem ser exatamente os mesmos dos exports.
      Podemos renomear usando "as":
        import { nome as nome2 } from './module1';

    - Importando tudo do módulo:
        import * as MeuModulo from './module1';

      Isso cria um objeto (MeuModulo) contendo todos os exports nomeados
      do módulo, como referências vivas.

    - Importando o export default:
        import qualquerNome from './module1';

      O export default não precisa usar chaves e pode ser importado com
      qualquer nome definido pelo importador.
*/

// Importando o default (multiplicacao) e alguns exports nomeados
import multiplicacao, { nome, sobrenome } from './module1';

console.log(multiplicacao(5, 50));

/*
    IMPORTANTE:
    O nome importado é um binding especial, imutável, criado na fase
    de linking do módulo. Ele não pode ser redeclarado, sobrescrito ou
    ocultado por outra variável com o mesmo nome no mesmo escopo.
*/

// const nome = 'James'; // Erro: "nome" já existe como binding importado.

/*
    Exemplo de uso de classe importada:
        const pessoa1 = new Pessoa('James', 'Hetfield');
*/
