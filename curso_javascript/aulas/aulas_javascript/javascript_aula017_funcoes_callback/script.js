function exibirArtigo(id, callbackSucesso, callbackErro){
    //Logica: Recuperar o id via requisição http
    if (true){
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas...' );
    } else {
        callbackErro('Erro ao recuperar dados.');
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1> ' + titulo + '</h1>');
    document.write('<hr></hr>');
    document.write('<p> ' + descricao + ' .</p' );

}

var callbackErro = function(erro) {
    document.write('<p><b>Erro: ' + erro + '.</p>');

}
exibirArtigo(1, callbackSucesso, callbackErro);