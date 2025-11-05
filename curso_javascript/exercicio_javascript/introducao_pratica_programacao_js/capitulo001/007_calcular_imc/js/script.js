/*
     O Índice de Massa Corporal (IMC) é calculado como:
     IMC = 703 * w / h²

     onde w é o peso em libras e h é a altura em polegadas.
     Escreva um programa que peça ao usuário sua altura e peso e calcule o IMC.
     [Dica: uma forma de calcular h² é h * h.]

*/

function solicitarInformacoes() {
     try {
          let altura = prompt('Informe sua altura: ');
          let peso = prompt('Informe seu peso: ');
          
          if (peso.trim() === '' || altura.trim() === '' || isNaN(altura) || isNaN(peso)) {
               throw new Error('Valor Inválido.');
          }

          altura = Number(altura);
          peso = Number(peso);

          return {
               altura,
               peso
          };

     } catch (erro) {       
          alert('Informação inválida tente novamente.');

          return solicitarInformacoes();
     }
}

function calcularImc(){
     const resultadoImc = document.querySelector('#resultado');
     const pesoAltura = solicitarInformacoes();
     const imc = (703 * pesoAltura.peso) / (pesoAltura.altura * pesoAltura.altura);

     resultadoImc.innerHTML = `<h1>Seu IMC é ${imc.toFixed(2)}.</h1>`;    
}

calcularImc();
