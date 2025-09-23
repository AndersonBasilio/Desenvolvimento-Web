function Calculadora(){

    // Criar atributo publico objeto
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');
    this.btnEqual = document.querySelector('.btn-igual');

    // Criar métodos
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        document.addEventListener('keyup', e => {
                if(e.key === 'Enter'){
                    this.realizaConta();
                }
            });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);    
    };

    this.realizaConta = () => {
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
        };
    };

    this.cliqueBotoes = () => {
        
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
        };

        this.btnParaDisplay = valor => {
            this.display.value += valor;

        };    
}

const calculadora = new Calculadora();
calculadora.inicia();