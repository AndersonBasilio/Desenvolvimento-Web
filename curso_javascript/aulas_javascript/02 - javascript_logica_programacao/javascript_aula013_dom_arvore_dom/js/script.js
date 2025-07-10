// DOM - Document Obect Model
/*
    Como Funciona Manupulação do DOM:
        No navegador o objeto geral é window(Mãe ou Pai) no HTML Topo da cadeia no navegador,
        onde temos o document dentro do HTML.
        document seria o topo
        abaixo temos html
        abaixo temos head
        abaixo temos body

        * Navegador
        ----------------------------
        - window é pai de document
        - document é pai de html
        - html é pai(parent) do head
        - head é pai() do body - dentro de body temos os filhos (child)

        OBS: Cada tags dentro é filho(child)
        h1 - temos um no de texto que chamamos NodeText

        Criamos a API do DOM
        const div = document.createElement('div); -> Criando um elemento.

        Criando um filho(child);
        let textoCriado = document.createTextNode(texto);

        Depois de criar um elemento adicionamos um filho(child);
        let tagCriada = document.createElement(tag); -> Criando uma tag ou elemento.

        Adicionando filho
        tagCriada.appendChild(textoCriado);

        Manipulando child nesse caso H1
        h1.style.backgroundColor = 'red'; -> Mudando o background

*/