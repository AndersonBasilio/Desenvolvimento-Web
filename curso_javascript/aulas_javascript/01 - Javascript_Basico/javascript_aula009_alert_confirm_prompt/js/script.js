/*
    alert -> Emiti um alerta na pagina, posterior ao cliclar em OK pagina irá abrir.
    confirm -> Solicitará uma confirmação do usuário, retorna true ou false.
    prompt -> Solicita as informações do usuário.

    OBS: Quando uma função esta dentro do objeto chamamos de metodo.

*/

//alert('Olá Mundo!');

//confirm('Deseja realmente apagar? ');


//Convertendo para fazer contas, nesse caso toda informação que pegamos no prompt será string.
let numero1 = Number(prompt('Digite um número: '));
let numero2 = Number(prompt('Digite um número: '));
let resultado = numero1 + numero2;
alert(`O resultado de ${numero1} + ${numero2} = ${resultado}`);
