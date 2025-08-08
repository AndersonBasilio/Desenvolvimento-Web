"use strict";
// 3 Escopos: Global, Função e Bloco.
let serie = 'Friends';
function x() {
    console.log(serie);
    if (true) {
        console.log(serie);
    }
}
x();
if (true) {
    console.log(serie);
}
