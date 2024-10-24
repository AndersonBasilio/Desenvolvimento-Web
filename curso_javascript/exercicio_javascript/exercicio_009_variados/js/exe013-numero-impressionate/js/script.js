//Função main
function main(){
    let numero =  receberInput();
    numero = conferirQtdDigitos(numero);
    let verificaNumero = eNumero(numero)
    let resultado = converterNumero(numero);
    let numOrdenadoCrescente = ordenarDigitosCrescente(numero);
    if(verificaNumero === true){
        console.log(`O número é ${numero}, tem ${resultado.length} digitos e o número ordenado é ${numOrdenadoCrescente}.`);

    } else {
        alert('Não é um valor válido, deve ser de quatro digitos!');
    }

}

//Recebe o input.
function receberInput(){
    let numero = Number(prompt('Informe o número: '));
    return numero;
    
}

//Verifica se é um numero
function eNumero(numero){
    if(!isNaN(numero)){
        return true;
    } else {
        return false;
    }
    
}

function converterNumero(numero){
    let digitos = numero.toString().split('');
    return digitos;

}

//Ordena os digitos
function ordenarDigitosCrescente(numero){
    let digitos = numero.toString().split('');
    return digitos.sort().join('');
}

//Confere os digitos
//Verificar se o digito e maior que 4.
function conferirQtdDigitos(num){
    let digitos = num.toString();
    while(digitos.length != 4){
        digitos = prompt('Informe o número: ');             
    }
    return Number(digitos);
}

//Inverte os digitos
function inverteDigitos(num){
    let digitos = num.toString();
    digitos.reverse();
}



//Número inteiro de 4 digitos com condição que não seja todos iguais.
//Exemplo 5236

//Verificar se o digito e maior que 4

//Transformar os numeros em sequencia de digitos.

//Ordernar os digitos de forma crescente.

//Ordenar os digitos de forma decrescente.

//subtrair os numeros decrescente.


//receberInput()
//var digitosCrescente = numero.toString().split('');

//convertendo o numero em digitos.
//console.log(`Número Crescente ${digitosCrescente.sort()}`);

main()