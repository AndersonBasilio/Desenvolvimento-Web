/*
    NPM é o gerenciador de pacotes do Node.js

    Entrando na pasta pelo terminal:
        Acessar a pasta desejada utilizando:
            cd nome_da_pasta

        OBS: Evitar nomes de módulos conhecidos. Usar o nome do projeto.

    Iniciando o npm dentro da pasta:
        npm init -y -> Cria o package.json automaticamente

    Instalação de pacotes:
        Instalar pacote -> npm install nome-do-pacote
        Instalar versão específica -> npm install express@4.18.2
        Fixar versão exata -> npm install express@4.18.2 -E

    Dependências:
        dependencies (padrão):
            npm install express

        devDependencies (somente desenvolvimento):
            npm install express --save-dev

        OBS: Webpack e Babel geralmente ficam em devDependencies

    Atualização de pacotes:
        npm update -> Atualiza respeitando ^ e ~

    Versionamento (SemVer):
        Exemplo: 2.1.0
        2 -> major (pode quebrar compatibilidade)
        1 -> minor (novas funcionalidades)
        0 -> patch (correções de bugs)

        ^ -> Atualiza minor e patch
        ~ -> Atualiza apenas patch

    Instalar versão major específica:
        npm install express@4.x

    Desinstalar pacote:
        npm uninstall express

    Listar pacotes:
        npm ls -> Lista todas dependências
        npm ls --depth=0 -> Apenas pacotes instalados diretamente
        npm ls --depth=1 -> Um nível de dependência

    Verificar pacotes desatualizados:
        npm outdated
*/