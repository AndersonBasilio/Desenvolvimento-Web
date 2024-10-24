function calcular_fatorial(numero){
   //Obtendo o numero do usuário
    var resultado = 1;
    var numero = document.getElementById('input_numero').value;
    var resultado_fatorial = document.getElementById('exibir_fatorial');

    //convertendendo o input_numero
    numero = Number(numero);
    
    //Verificando se o campo foi preenchido corretamente
    //isNaN(inicio) || document.getElementById('inicio').value.trim() === '' 
    if(numero.length === '' || isNaN(numero)){
        alert('Digite um número: ');
    } else {
           //Verificando se o número é 0.
        if(numero === 0){
            numero = 0 + resultado;
        //Senão for
        } else{
            for(contador = 1; contador <= numero; contador++){
                resultado *= contador;    
            }
        }     
    }

    //Exibindo o resultado.
    resultado_fatorial.innerHTML = `Fatorial é...<br>${numero}! = ${resultado}`;

    //Limpando e focalizando no campo.
    document.getElementById('input_numero').value = '';
    document.getElementById('input_numero').focus();
    
    return resultado;
}

console.log(fatorial(5) === 120)
