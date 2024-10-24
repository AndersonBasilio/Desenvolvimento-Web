function geradorTabuada(numero){
    console.log('Gerando tabuada de ' + numero)
    for(contador = 1; contador <= 10; contador++){
        console.log(`${contador} x ${numero} = ${contador * numero}`)
    }
    ' '
}

geradorTabuada(8)
geradorTabuada(2)