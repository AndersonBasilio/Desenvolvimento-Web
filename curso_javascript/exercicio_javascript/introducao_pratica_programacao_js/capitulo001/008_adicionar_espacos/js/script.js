/*
     Escreva um programa que peça ao usuário cinco números (use cinco instruções input).
     Em seguida, imprima todos os números na mesma linha, separados por exatamente três espaços.
     
*/

function solicitarInformacaUsuario() {
     try {
          let lista = []

          for (let i = 1; i <= 5; i++) {
               let numeros = prompt(`Digite o ${i}° número: `);

               if (numeros.trim() === '' || isNaN(numeros)) {
                    throw new Error('Valor inválido.')
               }

               numeros = Number(numeros);
               lista.push(numeros);
          }

          return lista;

     } catch (erro) {
          alert('Informação inválida, por favor informe somente números.');

          return solicitarInformacaUsuario();
     }
}

function separaNumeros(listaNumeros) {
     const separa = listaNumeros;
     return separa.join("&nbsp;&nbsp;&nbsp;");
}

function main() {
     const resultado = document.querySelector('#mostraResultado');
     resultado.innerHTML = '';

     resultado.innerHTML = `${separaNumeros(solicitarInformacaUsuario())}`;
}

