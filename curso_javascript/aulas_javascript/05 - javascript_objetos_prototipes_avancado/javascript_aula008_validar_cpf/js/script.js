// Validação de CPF
/*
Limpamos os pontos
CPF 705.484.450-52 

Obter primeiro digito
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4   3  2
70 0  40 28 48 20 16  15 2 = 237 <- Somar todos os valores

obter o primeiro digito
11 - (237 % 11) = 5 Primeiro Dígito

se digito for maior que 9, consideramos 0

inclui o primeiro dígito começamos de onze
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 = 284

11 - (284 % 11) = 2 Segundo Dígito

Compara com o CPF original conta valida.

*/

// Limpar o CPF tem que ser uma string

// Função para obter os digitos

let cpfInformado = prompt('Informe seu CPF: ');

function obterDigitos(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, ''); // Limpa tudo que não for número.
    let arrayCpf = Array.from(cpfLimpo.slice(0, 9)); // Convertendo para um array.
    let soma = 0;

    // Percorrendo o array e multiplicando
    for (let i = 0; i < 9; i++) {
        let numerosCpf = Number(arrayCpf[i]);
        let peso = 10 - i;

        soma += numerosCpf * peso;
    }

    let resto = soma % 11;
    let primeiroDigito = (resto < 2) ? 0 : 11 - resto;

    soma = 0
    for (let i = 0; i < 9; i++) {
        let numerosCpf = Number(arrayCpf[i]);
        let peso = 11 - i;

        soma += numerosCpf * peso;
    }

    soma += primeiroDigito * 2;

    let restoSegundoDigito = soma % 11;
    let segundoDigito = (restoSegundoDigito < 2) ? 0 : 11 - restoSegundoDigito;
    arrayCpf.push(primeiroDigito, segundoDigito);
    const cpfComDigito = arrayCpf.join('');

    return cpfComDigito;   
}

function verificarCpf(cpfParaVerificar){
    let cpfLimpo = cpfParaVerificar.replace(/\D+/g, '');
    let cpfGerado = obterDigitos(cpfParaVerificar);

    if(cpfLimpo === cpfGerado){
        console.log(`CPF Informado: ${cpfParaVerificar} é válido`);
    } else {
        console.log(`CPF Informado: ${cpfParaVerificar} é inválido`);
    }   
}

verificarCpf(cpfInformado);










// console.log(arrayCpf.map((ac, val) => ac * Number(val), 0));

