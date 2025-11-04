/*
    Use várias instruções print para imprimir a letra A exatamente como a mostrada abaixo: 
    
       *
     *   *
     *****
     *   *
     *   *
*/

let linha = 5
for (let i = 1; i <= linha; i++) {
    if (i === 1) {
        console.log('  ' + '*');
    } else if (i === 3) {
        console.log('*'.repeat(i + 2));
    } else {
        console.log('*   *');
    }
}
