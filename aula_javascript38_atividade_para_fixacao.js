/*A) Ao clicar no botão "Adicionar" disparar função que irá:
    • Recuperar o valor contido no campo de texto.
    • Verificar se o valor está vazio ou preenchido.
o Se vazio, exibir alert com a mensagem "Informe um valor válido".
o Se preenchido:
    ▪ Verificar se o valor informado já existe dentro do Array objetos.
    ▪ Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
    ▪ Se não existir:
        • Incluir o valor preenchido no campo dentro do Array.
        • Efetuar um console.log do Array para debug (checar se está funcionado).
        • Limpar o valor contido no campo de entrada de texto.
B) Ao clicar no botão "Ordenar" disparar função que irá:
    • Ordenar de forma alfabética os valores do Array de objetos.
    • Efetuar um console.log do Array para debug (checar se está funcionado).*/
var objetos = Array('Cadeira', 'Impressora', 'Garfo');

function adicionar(){
    var adicionaObjeto = (document.getElementById('entrada').value);
    var auxiliar = objetos.indexOf(adicionaObjeto);
    document.getElementById('entrada').value = '';

    if (adicionaObjeto == ''){
        alert('Informe um valor válido.');
    } else if (auxiliar === -1){
        objetos.push(adicionaObjeto);

    } else {
        alert('Objeto já adicionado.');
    }
}

function ordenar(){
    console.log(objetos.sort());
}
