/*
    Fetch API (GET)
*/



// Reescrevendo a função acima utilizando fetch API
/*
    Como fetch funciona fetch, suponha que queremos carrega o conteúdo da página.
*/

// Por padrão retorna uma Promise.
// fetch('pagina4.html')
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error('Erro 404!'); // Assim que fizermos um throw automaticamente vai para o catch.

//       return resposta.text(); // Essa função também retornará uma promise, por isso tem outro then
//     })
    
//     /*
//         console.log() -> Mostra no console somente.
//         console.warn() -> Mostra uma atenção.
//         console.error() -> Mostra um erro.
//     */

//     .then(html => console.log(html)) 
//     .catch(e => console.error(e));


document.addEventListener('click', e => {
    const el = e.target; 
    const tag = el.tagName.toLowerCase();

   if (tag === 'a') {
        e.preventDefault(); 
        carregaPagina(el);
    }
});

// Sem Async Await
// function carregaPagina(el) {

//     const href = el.getAttribute('href'); 

//     // Sem async await
//     // fetch(href)
//     //     .then(response => {
//     //         if(response.status !== 200) throw new Error('Erro 404!'); // Assumindo que irá dar um erro 404, mas pode ser um erro no servidor e etc.
//     //         return response.text()
//     //     })
//     //     .then(html => carregaResultado(html))
//     //     .catch(e => console.log(e));

// }

// Convertendo para async Await
async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        
        const response = await fetch(href);
    
        if(response.status !== 200) throw new Error('Erro 404!'); // Assumindo que irá dar um erro 404, mas pode ser um erro no servidor e etc.
        const html = await response.text();
    
        carregaResultado(html);

    } catch(e) {
        alert(e);
    }      
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
