//setTimeout(function() { document.write('Teste')}, 2000);

var i = 5;
var x = setInterval(function() {document.write(i + '<br>'); i--
if(i === 0){
    clearInterval(x)
    document.write('Bem vindo à minha página!')
}}, 1000);


