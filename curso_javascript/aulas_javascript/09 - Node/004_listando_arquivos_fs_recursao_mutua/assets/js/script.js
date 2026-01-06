// ==============================
// File System (fs)
// Ler Documentação: Node.js Docs
// ==============================

// fs -> Módulo nativo do Node para trabalhar com arquivos e pastas
// .promises -> permite usar async/await
const fs = require('fs').promises;

// path -> Módulo para lidar com caminhos de forma segura (Windows, Linux, Mac)
const path = require('path');


/*
    FUNÇÃO PRINCIPAL
    ----------------
    Lê um diretório e inicia a varredura dos arquivos.
    
    - Se nenhum caminho for passado, usa o diretório atual do arquivo.
    - Para cada diretório lido, chama a função "walk".
*/
async function readdir(rootDir) {

    // Caso nenhum diretório seja informado, usa o diretório atual
    rootDir = rootDir || path.resolve(__dirname);

    // Lê todos os arquivos e pastas dentro do diretório informado
    const files = await fs.readdir(rootDir);

    // Inicia o processamento dos arquivos encontrados
    await walk(files, rootDir);
}


/*
    FUNÇÃO WALK
    -----------
    Percorre cada item do diretório:
    
    - Verifica se é arquivo ou pasta
    - Entra recursivamente em subpastas
    - Filtra apenas arquivos .css
*/
async function walk(files, rootDir) {

    // Percorre cada item encontrado no diretório
    for (let file of files) {

        // Monta o caminho completo do arquivo ou pasta
        const fileFullPath = path.resolve(rootDir, file);

        // Ignora qualquer caminho que contenha ".git"
        if (/\.git/.test(fileFullPath)) continue;

        // Obtém informações do item (arquivo ou diretório)
        const stats = await fs.stat(fileFullPath);

        /*
            Se for um diretório:
            - Entra nele
            - Continua a varredura (recursão)
        */
        if (stats.isDirectory()) {
            await readdir(fileFullPath);
            continue;
        }

        /*
            Se NÃO for um arquivo .css:
            - Ignora
        */
        if (!/\.css$/.test(fileFullPath)) continue;

        // Exibe apenas arquivos .css encontrados
        console.log(fileFullPath);
    }
}


/*
    EXECUÇÃO
    --------
    Inicia a leitura a partir do diretório informado.
*/
readdir(
    'C:\\Users\\Anderson\\OneDrive\\Documentos\\HTML\\Desenvolvimento_Web\\curso_javascript\\aulas_javascript\\'
);


