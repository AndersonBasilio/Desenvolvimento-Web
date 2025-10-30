let numero = Number(prompt('Informe um número: '));
let numeroTitulo = document.getElementById('numInformado'); // Dessa forma estamos salvando na memoria, atraves da variável.

let textoInformacoes = document.getElementById('texto');


numeroTitulo.innerHTML = numero; // Mostrando número no navegador.

//Mostrando as informações no navegador.
textoInformacoes.innerHTML += `O dobro do número ${numero} é ${numero * 2}. <br>`;
textoInformacoes.innerHTML += `Raiz quadrada de ${numero} é ${Math.sqrt(numero)} <br>`;
textoInformacoes.innerHTML += `É NaN? ${isNaN(numero)}. <br>`;
textoInformacoes.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)}. <br>`;
textoInformacoes.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}. <br>`;
textoInformacoes.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}<br>`;
textoInformacoes.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br>`;

