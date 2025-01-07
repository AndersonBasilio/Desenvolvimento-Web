/*
    && -> Todas expressões precisam ser verdadeira para retornar verdadeira.
    || -> Todas expressões precisam ser falsas para retornar falsa.
    false -> Literal

    FALSY {
        0 
        '', "" ou ```
        null / undefined
        NaN
    }

    Exemplo:
        false && true -> Quando encontrar false paramos ali e retornamos os valor false.
    */

    //Irá checar e retonará o ultimo valor.
    //document.write('Luiz Otávio' && 'Maria');

    //Retornará a string vazia (falsy)
    //document.write('Luiz Otávio' && undefined && 'Maria');

    /*and
    function falaOi(){
        return 'Oi!';
    }

    let vaiExecutar = 'Joazinho';

    document.write(vaiExecutar && falaOi()); */
    
    //or
    //true && false -> Vai retornar "O valor verdadeiro"
    //Irá retornar Anderson, porque (OR) precisa apenas de uma expresão verdadeira para retornar o valor.
    //console.log(0 || false || null || "Anderson" || true);

   /*const corUsuario = 'vermelho';
    const corPadrao = corUsuario || 'preto';

    console.log(corPadrao)*/

    const a = 0;
    const b = null;
    const c = false
    const d = false;
    const e = NaN;

    //Irá exibir false na tela porque o valor 'false' é um valor verdadeiro, pois é uma string.
    //Se fosse false retornará o ultimo valor falso (NaN).
    //Se tiver so retornará 'Joazinho' pois é o unico valor verdadeiro.
    console.log(a || b || c || 'Joazinho' || d || e);
  

    


