// Quando uma função esta dentro de objeto chamamos de metodo.
// Factory Function (Função Fábrica)
// Se precisarmos criar dez pessoas usamos as funções.

function criaPessoa(nome, sobrenome, a, p){
    return{
        //Em alguns momentos não teremos os valores no parâmetros, mas sim as chaves.
        nome,
        sobrenome,

        // Dentro dos métodos podemos receber parâmetros.
        fala: function(assunto = 'Javascript'){
            return `${nome} está falando sobre assunto ${assunto} e seu peso é ${this.peso}KG.`
        },

        /* 
            Não teria os valores no parâmetros, peso não esta no escopo
            da função, dessa forma utilizando a palavra this conseguimos acessar.
            Erro: (peso is not defined) -> Peso não esta definido. 
            
            this. -> Sempre vai referir o que estamos executando.
        
        
        */
        altura: a,
        peso: p,

        /*
            Utilizando get imc irá fingir ser um atributo do objeto.
            Palavra get transforma função em uma propriedade se chama getter.
         */
        get imc(){
            const indiceMassaCorporal = this.peso / (this.altura ** 2);
            return `IMC de nome ${nome} é ${indiceMassaCorporal.toFixed(2)} `;
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // setter
        set nomeCompleto(valor){
            // Para extrair o primeiro nome fazemos dessa forma.
            valor = valor.split(' '); // Nome será dividido e irá retornar um array.

            //shift é método que remove o primeiro item do array
            this.nome = valor.shift();
            
            // Para juntar o resto do array sobrenome.
            this.sobrenome = valor.join(' ');

            console.log(valor);
        }
    };
}

const pessoa1 = criaPessoa('Anderson', 'Basilio', 1.89, 99);
console.log(pessoa1.fala('Javascript'));
console.log(pessoa1.imc);

// Utilizando get não conseguimos alterar o valor, utilizamos set
pessoa1.nomeCompleto = 'Mercês Basilio Amparo';
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.fala());

console.log();

const pessoa2 = criaPessoa('Maria', 'Helena', 1.65, 75);
console.log(pessoa2.fala('Javascript'));
console.log(pessoa2.imc);