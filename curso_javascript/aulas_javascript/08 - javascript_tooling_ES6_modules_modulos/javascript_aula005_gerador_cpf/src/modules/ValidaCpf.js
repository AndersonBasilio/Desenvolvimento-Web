export default class ValidaCpf {
    constructor(cpfEnviado)  {
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable: false,
            configurable: false,            
            value: cpfEnviado.replace(/\D+/g, '')
        });
    } 

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const primeiroDigito = ValidaCpf.geraDigito(cpfSemDigito);
        const segundoDigito = ValidaCpf.geraDigito(cpfSemDigito + primeiroDigito);
        this.novoCpf = cpfSemDigito + primeiroDigito + segundoDigito;

    }

    // Quando não utilizamos a palavra this em um método pode se tornar static.
    static geraDigito(cpfSemDigito){
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for(let stringNumerica of cpfSemDigito){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'; 
    }
    
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraNovoCpf();

        console.log('Novo CPF: '+ this.novoCpf);
        return this.novoCpf === this.cpfLimpo;
    }
}
