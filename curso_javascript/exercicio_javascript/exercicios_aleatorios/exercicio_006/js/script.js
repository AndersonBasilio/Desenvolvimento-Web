function adicionar_tarefa(){   
    var tarefa = document.getElementById("input_tarefa").value;
    if(tarefa.length != 0){
        var itenLista = document.createElement('li');
        itenLista.innerHTML = `${tarefa} <span class="apagar" onclick="apagar_tarefa(this)">❌</span> <span class="fazer" onclick="tarefa_feita(this)">✔️</span>`;
        document.getElementById('itens_adicionados').appendChild(itenLista);
        
    } else{
        alert('Digite algo.');
    }
    document.getElementById('input_tarefa').value = '';
    document.getElementById('input_tarefa').focus() 

    /*Listas de Tarefas

        Usuario vai digitar alguma coisa.
        [x] - Saber quando o botão foi clicado.
        [x] - Pegar o texto dentro do input.
        [] - Colocar o texto na tela.

    */   
    
}

function apagar_tarefa(span){
    span.parentElement.remove()
}

function tarefa_feita(span){
    span.parentElement.style.background = '#3CB371';
    

}



