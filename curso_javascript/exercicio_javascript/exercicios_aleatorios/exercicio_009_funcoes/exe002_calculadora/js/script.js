/*
Exercício 2: Calculadora

Crie uma função chamada "calcula" que recebe dois números e uma operação (adição, subtração, multiplicação ou divisão) como parâmetros e retorna o resultado.

Exercício 3: Verificar Idade

Crie uma função chamada "verificaIdade" que recebe uma idade como parâmetro e retorna:

- "Menor de idade" se a idade for inferior a 18.
- "Maior de idade" se a idade for igual ou superior a 18.

Exercício 4: Tabuada

Crie uma função chamada "tabuada" que recebe um número como parâmetro e retorna a tabuada desse número de 1 a 10.

Exercício 5: Fatorial

Crie uma função chamada "fatorial" que recebe um número como parâmetro e retorna o fatorial desse número.

Exercício 6: Conversão de Unidades

Crie uma função chamada "converteUnidades" que recebe um valor e uma unidade (km, m, cm, mm) como parâmetros e retorna o valor convertido para as outras unidades.

Exercício 7: Validar CPF

Crie uma função chamada "validaCPF" que recebe um CPF como parâmetro e retorna verdadeiro se o CPF for válido e falso caso contrário.

Exercício 8: Jogo de Adivinhação

Crie uma função chamada "adivinhacao" que gere um número aleatório entre 1 e 100 e retorna um resultado baseado na tentativa do usuário:

- "Muito alto" se o chute for maior que o número.
- "Muito baixo" se o chute for menor que o número.
- "Você ganhou!" se o chute for igual ao número.*/

/* 
    Exercício 2: Calculadora
    Crie uma função chamada "calcula" que recebe dois números e uma operação (adição, subtração, multiplicação ou divisão) como parâmetros e retorna o resultado.
*/

//Função principal
function main(){
    let [numero1, numero2] = obterNumeros()
    let operador = obterOperador()
    let resultadoOperacao = calcularResultado(numero1, numero2, operador)
    alert(numero1 + ' ' + operador + ' ' +  numero2 + ' = ' + resultadoOperacao)
}

//Função para obter numero
function obterNumero(mensagem){
    let numero;
    do {
        numero = Number(prompt(mensagem));
        if(isNaN(numero)){
            alert('Digite um número válido.');
        } 
    } while (isNaN(numero));
    return numero;
}

//Obter número do usuário.
function obterNumeros(){
    const primeiroNumero = obterNumero('Informe o primeiro número: ');
    const segundoNumero = obterNumero('Informe o segundo número: ');
    return [primeiroNumero, segundoNumero];         
}

//Obter operadores.
function obterOperador(){
    let operador;
    do {
        operador = prompt('Informe o operador: +, -, *, / ');
        if(operador != '+' && operador != '-' && operador != '/' && operador != '*'){
            alert('Favor informar um operador correto. [+, -, * e / ]');
        }
    } while(operador != '+' && operador != '-' && operador != '/' && operador != '*');

    return operador;    
}

//Calcula e retorna o resultado.
function calcularResultado(numero1, numero2, operador){
    if(operador === '+'){
       return resultado = numero1 + numero2;
    } else if(operador === '-'){
        return resultado = numero1 - numero2;
    }else if(operador === '/'){
        return resultado = numero1 / numero2;
    } else if(operador === '*'){
        return resultado = numero1 * numero2;
    }
}

//Chamando a função principal.
main()


