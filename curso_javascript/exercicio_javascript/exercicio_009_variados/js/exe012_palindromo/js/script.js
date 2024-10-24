function receberInput(){
    var inputUsuario = prompt('Informe a palavra que deseja verificar se e um palindromo: ')
}

function ePalindromo(str){
    //palavra para verificar se é palindromo / //remover espaços e pontuações
   var palavra = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');//Convertida para minúscula
    
    //palavra invertida recebe valor limpo.
    var stringInvertida = '';
    
    for(var contador = palavra.length - 1; contador >= 0; contador--)
        stringInvertida += palavra[contador];

    //Comparar a sequencia original com a convertida.
    if(palavra === stringInvertida){
        console.log('É um palíndromo');
    } else {
        console.log('Não é um palíndromo.');
    }
}

ePalindromo('222')