const nome = prompt('Informe seu nome completo: ');
document.body.innerHTML += `O seu nome é ${nome}. <br>`;
document.body.innerHTML += `Seu nome tem letras. <br>`;
document.body.innerHTML += `A segunda letra do seu nome é. <br>`
document.body.innerHTML += `Qual é o primeiro indice da letra [A] do seu nome? <br>`
document.body.innerHTML += `Qual é o ultimo indice da letra [A] no seu nome? <br>`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: <br>`
document.body.innerHTML += `As palavras do seu nome são: <br>`
document.body.innerHTML += `Seu nome com letras maiusculas: <br>`
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()}`

