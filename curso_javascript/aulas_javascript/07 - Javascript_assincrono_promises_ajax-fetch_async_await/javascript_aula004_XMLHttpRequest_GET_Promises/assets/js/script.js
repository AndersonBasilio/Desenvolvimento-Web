/*
    XMLHttpRequest -> Pode fazer requisição de qualquer tipo de dado
    Qualquer dúvida que tivemos pesquisamos no google por códigos HTTP.
        Qualquer código entre 200 e 300 é código de sucesso.
        300 para cima e considerado erro.
 */

// Função chamada request
const request = obj => {

    // Trabalhando com Promise
    return new Promise((resolve, reject) => {
        // Nome dessa variável é padrão. (xhr)

        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); // GET e a requisição.
    
        // Se fosse algum POST que vem de algum formulário, mandamos os dados.
        xhr.send(); // Como não é podemos colocar null.
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // Colocamos uma função de callback dentro do objeto.
            } else {
                reject(xhr.statusText); // Outro callback de erro.
            }
        });   
    });   
};

/* 
    Mudando o carregamento padrão do navegador de mudar de página, 
    iremos fazer um componete na página e fazermos carregar nesse componente.

*/
// Pegando os cliques em qualquer local do documento.
document.addEventListener('click', e => {
    const el = e.target; // Checando o elemento que está sendo clicado.
    const tag = el.tagName.toLowerCase(); // Pegando a tag minúsculo.

   if (tag === 'a') {
        e.preventDefault(); // Previnindo o evento para não carregar a página ao clicar.
        carregaPagina(el); // Chamando a função carrega página.
    }
});

// Criando a função para carregar página recebendo o elemento.
async function carregaPagina(el) {

    const href = el.getAttribute('href'); // Pega o clique que foi clicado na página.
        
    // Carregando a página via AJAX.
    const objConfig = {
        method: 'GET',
        url: href
        }; 

    try {
        const response = await request(objConfig);
        carregaResultado(response); // Temos que mandar os callback.
    } catch(e) {
        console.log(e);
    }
}

// Função para carregar resultado.
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

