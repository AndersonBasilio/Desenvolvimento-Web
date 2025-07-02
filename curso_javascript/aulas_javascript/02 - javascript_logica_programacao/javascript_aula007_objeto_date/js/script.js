// Para usar uma função construtora temos que usar new Date.
// 01/01/1970 Timestamp Unix ou Epoca Unix
/*
const tresHoras = 60 * 60 * 3 * 1000; // Adicionando uma hora
const umDia = 60 * 60 * 24 * 1000; // Adicionando um dia
const data = new Date(0 + tresHoras + umDia); // Ira cria com a data atual.

*/

// Temos que ter no minimo dois parametros
/*
    Mandamos os parametros da seguinte forma
    Ano, Mes, Dia, Hora, Minutos, Segundos e Milessimo de segundo.

*/
//const data = new Date(2019, 3); // Quando omitimos zera os valores
/*
//Caso tivermos uma data com formato de String, mais utilizado.
const data = new Date(1751483586213);

//Obtendo dia, mes, ano
console.log('Dia ', data.getDate());
console.log('Mes ', data.getMonth() + 1); // Mes começa do Zero
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg ', data.getSeconds());
console.log('Milisegundos ', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0-Domingo, 6-Sábado
console.log(data.toString());

console.log(Date.now()); // Pegará a data atual.
*/

//Criando uma função que adiciona um zero.
function adicionaZeroEsquerda(numero){
    return numero >= 10 ? numero : `0${numero}`;

}

//Criando uma função que formata uma data.
function formataData(data){
   //console.log(data);
   const dia = adicionaZeroEsquerda(data.getDate());
   const mes = adicionaZeroEsquerda(data.getMonth());
   const ano = adicionaZeroEsquerda(data.getFullYear());
   const hora = adicionaZeroEsquerda(data.getHours());
   const min = adicionaZeroEsquerda(data.getMinutes());
   const seg = adicionaZeroEsquerda(data.getSeconds());
   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)


