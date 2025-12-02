const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gerarNumero = () => String.fromCharCode(rand(48, 58));
const gerarLetrasMaiusculas = () => String.fromCharCode(rand(65, 91));
const gerarLetrasMinusculas = () => String.fromCharCode(rand(97, 123));
const simbolos = '!@#$%¨&*()^~[]?/,.;:{}-+.=_';
const gerarSimbolos = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(quantidade, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    quantidade = Number(quantidade);

    if(quantidade >= 23){
        alert('Quantidade de caractere acima do permitido.');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        
        maiusculas && senhaArray.push(gerarLetrasMaiusculas());
        minusculas && senhaArray.push(gerarLetrasMinusculas());
        numeros && senhaArray.push(gerarNumero());
        simbolos && senhaArray.push(gerarSimbolos());
    }

    return senhaArray.join('').slice(0, quantidade);
}

geraSenha(3, true, true, true);