/*
    Em horário de 24 horas, as horas vão de 0 (meia-noite) a 23 (23h).
    Escreva um programa que pergunte a hora atual e quantas horas no futuro o usuário quer ir, e exiba a hora correspondente.
    Por exemplo: se agora são 13h e queremos ir 27h no futuro, o resultado deve ser 16h.
    [Dica: use o operador módulo %.]

*/

class HorarioFuturo {
    constructor(horaAtual, horaFutura) {
        this.horaAtual = horaAtual;
        this.horaFutura = horaFutura;
    }

    // Obter Informações usuário.
    obterInformacaoUsuario(){
        // Perguntar hora atual.
        let horaAtualUsuario = Number(prompt('Insira a hora atual (0 a 23): '));

        // Peguntar quantas horas no futuro o usuário que ir.
        let horaAvancoUsuario = Number(prompt('Quantas horas  você quer avançar: '));

        while(isNaN(horaAtualUsuario) ||
             isNaN(horaAvancoUsuario) ||
             horaAtualUsuario < 0 || 
             horaAtualUsuario > 23 ||
             horaAvancoUsuario < 0
            ){
            alert('Informação incorreta, por favor informe apenas números válidos.');
        
            horaAtualUsuario = Number(prompt('Insira a hora atual (0 a 23): '));
            horaAvancoUsuario = Number(prompt('Quantas horas  você quer avançar: '));
            
        }
        
        this.horaAtual = horaAtualUsuario;
        this.horaFutura = horaAvancoUsuario;

        return { horaAtualUsuario, horaAvancoUsuario };
    }

    // Calcular hora futura.
    calcularHoraFutura(){
        const horaCalculada =  this.horaAtual + this.horaFutura;
        return horaCalculada % 24;
    }
    
    // Mostar qual será a hora depois do avanço.
    mostrarHoraDepoisAvanco(){
        const mostrarParaUsuario = document.querySelector('#mostrarHoraAvancada')
        mostrarParaUsuario.innerHTML = `<h3><i>Se agora são ${this.horaAtual}h e queremos ir ${this.horaFutura}h no futuro, então o resultado deve ser ${this.calcularHoraFutura()}h.</i></h3>`;
    }

    // Main
    main(){
        this.obterInformacaoUsuario();
        this.calcularHoraFutura();
        this.mostrarHoraDepoisAvanco();
    }
}

const horarioFuturo = new HorarioFuturo();
horarioFuturo.main();