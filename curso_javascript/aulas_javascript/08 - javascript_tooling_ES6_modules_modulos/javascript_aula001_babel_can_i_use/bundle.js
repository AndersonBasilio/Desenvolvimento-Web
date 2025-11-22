/*
    Sites: Can i use -> Para verificar o que é suportado.

    Babel é um tradutor e um compilador de codigos.
    site é babeljs.io

    Instalação Babel:
        Abrir Terminal

        Inicializar o Gernciador de pacotes: npm init -y (Irá criar um pakage.json na pasta.)

        Instalar babel: npm install --save-dev @babel/cli @babel/preset-env @babel/core (Instalando como dependencia).

        Converter para um script mais moderno. npx babel script.js -o bundle.js --presets=@babel/present-env

        Aualizar bundle
            Comando: npx babel script.js -o bundle.js

        Utilizar o bundle.js no arquivo HTML.


*/

const nome = 'Anderson';
const obj = {
  nome
};
const novoObj = {
  ...obj
};
console.log(novoObj);
