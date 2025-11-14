/*
    Escreva um programa que imprima os números de 1 a 20 e suas raízes quadradas (arredondadas para 4 casas decimais), na mesma linha de cada número.
*/

class RaizQuadrada {

    exibirRaizQuadrada() {
        
        for (let  i = 1; i <= 20; i++){
            let raiz = Math.sqrt(i).toFixed(4);
            (i <= 9) ? console.log(`\u221A0${i} = ${raiz}`) : console.log(`\u221A${i} = ${raiz}`);
        }
    }

    main(){
        this.exibirRaizQuadrada();
    }
}

const valorRaizQuadrada = new RaizQuadrada();
valorRaizQuadrada.main();