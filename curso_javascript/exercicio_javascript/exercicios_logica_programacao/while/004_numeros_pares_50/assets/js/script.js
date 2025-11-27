/*
    4. Mostrar apenas números pares até 50
    Use um while para mostrar apenas os números pares de 0 a 50.    
*/

class MostrarNumerosPares {

    ImparPar(min, max) { 
        let contador = min; 
        const listaPares = [];
        const listaImpares = [];

        while(contador <= max){
            (contador % 2 === 0) ? listaPares.push(contador) : listaImpares.push(contador);
            contador++
        }

        console.log(`\nLista de números pares: [ ${listaPares.join(' - ')} ]
            \nLista de números impares: [ ${listaImpares.join(' - ')} ]\n`
        );
    }
}

const mostraListaParesImpares = new MostrarNumerosPares();
mostraListaParesImpares.ImparPar(1, 50);