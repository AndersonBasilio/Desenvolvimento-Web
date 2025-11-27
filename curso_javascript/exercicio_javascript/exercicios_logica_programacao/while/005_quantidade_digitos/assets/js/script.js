/*
    5. Descobrir a quantidade de dígitos de um número
    Peça ao usuário um número e use while para contar quantos dígitos esse número possui.   
*/

function solicitarDigitos() {
    let entradaUsuario = Number(prompt('Por favor insira o dígito: '));

    while (isNaN(entradaUsuario) || entradaUsuario < 0) {
        alert('Dígito inválido, por favor insira um dígito válido.');
         entradaUsuario = Number(prompt('Por favor insira o dígito: '));
    }

   return entradaUsuario;
}

function quantidadeDigitos(digitos) {

    return String(digitos).length;  
}

function mostrarResultadoUsuario(digitos, quantidadeDigitos){
    const resultado = document.querySelector('#resultadoDigito');
    resultado.innerHTML = `O número informado pelo usuário foi ${digitos}. Ele possui ${quantidadeDigitos} dígitos.`
}

function main() {
    const digitoUsuario = solicitarDigitos();
    const quantidadeDigitoUsuario = quantidadeDigitos(digitoUsuario);
    mostrarResultadoUsuario(digitoUsuario, quantidadeDigitoUsuario);   
}

main();