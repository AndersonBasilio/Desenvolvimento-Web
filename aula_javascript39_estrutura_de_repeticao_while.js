var x = 1;

document.write('Início' + '<br>')
while(x <= 10){
    //Códigos
    x ++; //Incremento
    if(x === 5){
        continue
    }
    document.write(x + '<br>');

    /*if (x === 5){
        break;// Ira interromper o laço
    }
    */
    //x ++; //Incremento
    
}

document.write('Fim' + '<br>')