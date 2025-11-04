/*
    Use várias instruções print para imprimir um triângulo que fique exatamente como o mostrado abaixo:

    *
    **
    ***
    ****
*/

function criarTriangulo() {
    let linhas = 4;
    for(let i = 1; i <= linhas; i++){
        console.log('*'.repeat(i));
    }
}

criarTriangulo();