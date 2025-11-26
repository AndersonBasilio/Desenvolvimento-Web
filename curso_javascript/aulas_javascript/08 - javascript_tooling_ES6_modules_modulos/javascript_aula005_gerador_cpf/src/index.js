import GeraCpf from './modules/GeraCpf';

import './assets/css/style.css' // Importando o css direto no arquivo.

//Criando uma função que se auto inicia.
(function(){
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');

    cpfGerado.innerHTML = gera.geraNovoCpf();

})();

