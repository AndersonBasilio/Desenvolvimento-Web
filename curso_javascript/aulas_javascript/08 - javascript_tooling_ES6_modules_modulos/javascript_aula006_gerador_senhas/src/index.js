/*
    Estrutura Projeto:
        pastas:
            node_modules
            public (Pasta que o usuário terá acesso)
                assets
                    js
                        bundle.js
                        bundle.js.map
                    index.html
            src
                assets
                    css
                    img
                    js
                modules (Pasta modules fica todos os modulos)
                index.js (Dentro de src)
            .gitignore
            package-lock.json
            package.json
            webpack.config.js                          
*/
import formGeraSenha from './modules/formGerarSenha';
import './assets/css/style.css' // Importando o css direto no arquivo.

formGeraSenha();