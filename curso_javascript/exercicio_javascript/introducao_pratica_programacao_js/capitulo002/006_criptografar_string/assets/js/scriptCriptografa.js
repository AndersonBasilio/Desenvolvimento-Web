/*
    Uma maneira simples de criptografar uma mensagem é reorganizar seus caracteres. Uma forma de fazer isso é selecionar os caracteres nos índices pares, colocá-los no início da string criptografada e, em seguida, os caracteres ímpares. Por exemplo, a string "message" seria criptografada como "msaeesg", pois os caracteres pares são m, s, a, e (nos índices 0, 2, 4 e 6) e os caracteres ímpares são e, s, g (nos índices 1, 3 e 5).

    (a) Escreva um programa que solicite ao usuário uma string e utilize esse método para criptografá-la.

    (b) Escreva um programa que descriptografe uma string criptografada com esse método.

*/

class Criptografar {
    constructor(stringUsuario) {
        this.stringUsuario = stringUsuario;
        this.posicoesEspacos = [];
    
    }

    solicitarStringUsuario() {
        let stringUsuario = prompt('Insira uma palavra que tenha mais de 3 caracteres: ').toLowerCase();

        if (stringUsuario.trim() === '' || stringUsuario.length <= 3) {
            alert('Por favor, digite mais de três caracteres.');
            return this.solicitarStringUsuario();
        }

        for (let i = 0; i < stringUsuario.length; i++) {
            if (stringUsuario[i] === " ") this.posicoesEspacos.push(i);
        }        

        this.stringUsuario = stringUsuario.replace(/\s+/g, '')
        return this.stringUsuario;
    }

    criptografarString() {
        let letrasPares = [];
        let letrasImpares = [];
        let stringCriprografada = '';

        for (let i = 0; i < this.stringUsuario.length; i++) {
            (i % 2 === 0 ? letrasPares : letrasImpares).push(this.stringUsuario[i]);
        }

        stringCriprografada = letrasPares.join('') + letrasImpares.join('');
        return stringCriprografada;
    }

    mostrarString() {
        const resultado = document.querySelector('#exibirString');
        resultado.innerHTML = `Mensagem Criptografada: ${this.criptografarString()}`;
    }
}


class Descriptografar {
    constructor(stringCriptografada, posicoesEspacos) {
        this.stringCriptografada = stringCriptografada;
        this.posicoesEspacos = posicoesEspacos;
    }

    descriptografarString() {

        let metade = Math.ceil(this.stringCriptografada.length / 2);
        let letrasParesDescriptografar = this.stringCriptografada.slice(0, metade);
        let letrasImparesDescriptografar = this.stringCriptografada.slice(metade);
        let stringOriginal = '';
        
        for (let i = 0; i < this.stringCriptografada.length; i++) {
            (i % 2 === 0 ? stringOriginal += letrasParesDescriptografar[Math.floor(i / 2)] : stringOriginal += letrasImparesDescriptografar[Math.floor(i / 2)])
        }

        for (let pos of this.posicoesEspacos) {
            stringOriginal = stringOriginal.slice(0, pos) + " " + stringOriginal.slice(pos);
        }
        
        return stringOriginal;
    }
}

const mensagem = new Criptografar();

mensagem.solicitarStringUsuario();
mensagem.mostrarString();

function main() {
    let mostrarStringOriginal = document.querySelector('#stringDescriptografada');
    let stringCriprografada = mensagem.criptografarString();
    let descriptografador = new Descriptografar(stringCriprografada, mensagem.posicoesEspacos);

    let stringOriginal = descriptografador.descriptografarString();
    mostrarStringOriginal.innerHTML = 'Mensagem Descriptografada: ' + stringOriginal.replace(stringOriginal[0].toLowerCase() ,stringOriginal[0].toUpperCase());
      
}

const btn = document.querySelector('button');
btn.addEventListener('click', main);



