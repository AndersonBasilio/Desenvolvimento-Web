/* 
    Criando uma Factory Function 
    -----------------------------

    - Como é uma factory function irá retornar um objeto.
    - Podemos ter variáveis fora do objeto é factory é uma função normal, lembrando que o objeto tera acesso.
    - Arrows function não muda o comportamento do this, varia de acordo com quem esta chamando sempre teremos this travado em quem criou o elemento.
    - Utilizando arrows function não precisamos usar bind()


*/
function criaCalculadora(){
    return {
        //Atributos
        // display esta dentro do atributo objeto.
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnEqual: document.querySelector('.btn-igual'),

        // Criando métodos.
        inicia(){
            // Sempre que quisermos referenciar a chave do objeto dentro do objeto precisamos da palavra this.
            this.cliqueBotoes();
            this.pressionaEnter();

        },

        pressionaEnter(){
            document.addEventListener('keyup', e => {
                if(e.key === 'Enter'){
                    this.realizaConta();
                }
            });    
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            // Função eval dode ser perigosa, avalia com javascript.
            // Qualquer javascript pode ser executado.
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(conta === undefined || conta === null || isNaN(conta)) {
                alert('Conta inválida');
                return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },


        cliqueBotoes() {
            // Irá pegar o click.
            // this -> É a calculadora é document.
            // Utilizando arrows function.
            document.addEventListener('click', (e) => {
                const el = e.target;

                // Exibindo números no display.
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                // Limpando o display da calculadora.
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                // Apagando numeros de um em um.
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                // Criando realizar a soma e mostrando no display.
                if(el.classList.contains('btn-igual')){
                    this.realizaConta();
                }

              // Para resolver o this usamos bind(), falamos para usar o this da bind(). 
            });
        },

        // Criando a função.
        btnParaDisplay(valor){
            this.display.value += valor;

        }
    };

}

const calculadora= criaCalculadora();

// Sempre deixar o método inicializar a calculadora.
calculadora.inicia();
