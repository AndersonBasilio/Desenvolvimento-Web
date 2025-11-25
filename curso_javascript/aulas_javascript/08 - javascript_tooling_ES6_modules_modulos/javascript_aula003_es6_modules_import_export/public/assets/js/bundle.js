/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   soma: () => (/* binding */ soma)
/* harmony export */ });
/*
    Criaremos algumas variáveis para importar.
*/

var nome = 'Anderson';
var sobrenome = 'Basilio';
var idade = 30;
function soma(x, y) {
  return "".concat(x, " + ").concat(y, " = ").concat(x + y);
}

// Usando default podemos deixar um por arquivo (não precisamos colocar dentro de chaves).
// export default function soma(x, y) {
//     return `${x} + ${y} = ${x + y}`;
// }

var cpf = '123.456.789-98'; // Dessa forma será uma variável privada que não será importada.

// Exportando uma classe.
// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

/* 
    Colocamos o que quermos importar entre chaves, será importado somente que tiver dentro de chaves.
        export { nome, sobrenome, idade, soma };

    Exportando com outra variável
        export { nome as nome2, sobrenome, idade, soma }; Lembrando que no arquivo principal terá a variável como nome2

    Exportando diretamente, colocamos diremente antes da variável criada.
        export const nome = 'Anderson';
        export const sobrenome = 'Basilio';
        export const idade = 30;

        export function soma(x, y) {
            return `${x} + ${y} = ${x + y}`;
        }

        Exportando classe direto na criação.
        export class Pessoa {
            constructor(nome, sobrenome) {
                this.nome = nome;
                this.sobrenome = sobrenome;
            }
        }

    Não conseguimos exportar default de uma constante diretamente, então fazemos da seguinte forma:
        export {nome, sobrenome, idade, soma as default} COLOCAMOS O DEFAULT ENTRE CHAVES.

    Exportando com arrow functions.
    export default (x, y) => `${x} x ${y} = ${x * y}`;

    Mais comum de ser ver, quando tivermos uma classe ou constante.
    eport const nome = "Anderson";
    export sobrenome = "Basilio";

*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((x, y) => "".concat(x, " x ").concat(y, " = ").concat(x * y));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ "./src/module1.js");
/*
    Sempre ler a documentação no site da MDN
    Export e Import

*/

/* 
    Importamos do arquivo module1, dessa forma importamos para o arquivo principal.

    Usamos as para quando quisermos "redeclarar" uma variável
        import {nome as nome2}

    Importando tudo que estiver no arquivo no caso (module1).
        import * as MeuModulo from './module1'

    Importando default
        import qualquerNome from '.modulo1;


*/

// Importando conteúdo de module1.
//import {nome, sobrenome, idade, soma, Pessoa} from './module1';

// Importando tudo no arquivo.
//import * as MeuModulo from './module1'

// Será um objeto que tem tudo do modulo.
//console.log(MeuModulo);

// Importando default o padrão é somente um no modulo.

console.log((0,_module1__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 50));

//const nome = 'James'; // Como importamos nome e estamos declarando uma variável como const não pode ser redeclarada.

// Criando uma pessoa com a classe
//const pessoa1 = new Pessoa('James', 'Hetfield');

// console.log('Nome: ' + nome + ' Sobrenome: ' + sobrenome + ' Idade: ' + idade + ' anos.');
// console.log(soma(3, 2)); // Chamando a soma que é uma função.
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map