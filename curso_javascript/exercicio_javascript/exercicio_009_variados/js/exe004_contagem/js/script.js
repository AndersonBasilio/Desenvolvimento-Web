var inicio = Number(1);
var fim = Number(10);
var contador = Number(1);

console.log('Contagem utilizando o FOR.')
for(contador = inicio; contador <= fim; contador++){
    console.log(contador)
}

console.log('Contagem utilizando o While.');
while(inicio <= fim){
    console.log(inicio)
    inicio++
}


console.log('Contagem utilizando o Do While.');

var inicio = 1;
var fim = 10;   

do{
    console.log(inicio)
    inicio++
    
}while(inicio <= fim);
