/*
    Indini do Javascript tem um limite de execução.
    Função recursiva é quando queremos chamar a função devolta.
*/

// Enquanto o maximo for maior para de executar.
function recursiva(max){
    if(max >= 10) return; // Para a função aqui.
    max++;
    console.log(max);

    recursiva(max);
}

recursiva(0);