/*
    Escreva um programa que peça ao usuário para inserir uma distância em quilômetros e, em seguida, exiba quantas milhas essa distância representa. Há 0,621371 milhas em um quilômetro.   

*/


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });gfdgnf

function solicitarDistancia(){
  let distanciaKm = Number(prompt('Informe a distância em Km: '));
  while(isNaN(distanciaKm)){
    distanciaKm = Number(prompt('Por favor, informe a distância como solicitada!'));
  }

  return distanciaKm;
}

function converterDistanciaParaMilhas(distanciaKm){
  const milhas = 0.621371;
  const distanciaMilhas = distanciaKm * milhas;
  
 alert(`${distanciaKm}Km convertido para Milhas é ${distanciaMilhas.toFixed(3)}.`);

}

function main(){
  const distancia = solicitarDistancia();
  converterDistanciaParaMilhas(distancia);
}

// inicia o programa
main();
