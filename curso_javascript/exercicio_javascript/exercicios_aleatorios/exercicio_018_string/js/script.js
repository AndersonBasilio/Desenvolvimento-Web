const nome = prompt('Digite seu nome completo: ').toLocaleLowerCase();

document.body.innerHTML += `Seu nome é: <mark>${nome}</mark>.<br>`;
document.body.innerHTML += `Seu <mark>${nome}</mark> tem <mark>${nome.replace(' ', ''), nome.length}</mark> letras.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é:<mark>${nome[1]}</mark> <br>`;
document.body.innerHTML += `Qual é o primeiro indice da letra (a) <mark>${nome.indexOf('a')} </mark>do seu nome <br>`;
document.body.innerHTML += `Qual é o ultimo indice da letra (a) do seu nome? <mark>${nome.lastIndexOf('a')}</mark><br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: <mark>${nome.slice(-3)}</mark><br>`;
document.body.innerHTML += `As palavras do seu nome são: <mark>${nome.split(' ')}</mark><br>`
document.body.innerHTML += `Seu nome com letras maiusculas: <mark>${nome.toLocaleUpperCase()}</mark><br>`
document.body.innerHTML += `Seu nome com letras minusculas: <mark>${nome.toLocaleLowerCase()}</mark><br>`