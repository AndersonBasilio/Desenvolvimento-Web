// Minha solução.
// const container = document.querySelector('.container');
// const h1 = document.createElement('h1');
// h1.textContent = 'Lorem Ispum Dolor Sit Amet.';

// const elementos = [
//     {tag: 'p', texto: 'Frase 1'}, // 0
//     {tag: 'div', texto: 'Frase 2'}, // 1
//     {tag: 'footer', texto: 'Frase 3'}, // 2
//     {tag: 'section', texto: 'Frase 4'}, // 3
// ];

// container.appendChild(h1);

// for(let i = 0; i < elementos.length; i++){
//     const item = elementos[i]
//     const criaElementos = document.createElement(item.tag);
//     criaElementos.textContent = item.texto;
// }
//  container.appendChild(criaElementos);

// Solução corrigida
const elementos = [
    {tag: 'p', texto: 'Frase 1' },
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container'); // Isso e coisa do DOM, dessa forma selecionamos a primeira classe.

const div = document.createElement('div'); //Criando uma div
const h1 = document.createElement('h1'); // Criando um titulo com H1
h1.textContent = 'Lorem Ispum Dolor Sit Amet.'; // Titulo do H1.

container.appendChild(h1);

// Percorrendo o elemento com for.
for (let i = 0; i < elementos.length; i++){
    // Capturando a tag e texto e colocando em uma variável.
    let {tag, texto} = elementos[i];
    let criaElementos = document.createElement(tag, texto);

    //Colocando texto no HTML
    //criaElementos.innerHTML = texto;
    //criaElementos.innerText = texto // Como tem somente texto podemos utilizar innerText

    // Criando com crateTextNode
    let textoCriado = document.createTextNode(texto)
    criaElementos.appendChild(textoCriado)

    //Colocando os elementos criados dentro da div.
    div.appendChild(criaElementos);
}

// Adicionando na div.
container.appendChild(div);