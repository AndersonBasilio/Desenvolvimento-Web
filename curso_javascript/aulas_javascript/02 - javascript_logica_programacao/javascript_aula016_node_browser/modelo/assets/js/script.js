// const paragrafos = document.querySelector('.p'); // Retorna somente um elemento
// const selecionaParagrafos = document.querySelectorAll('p'); // Seleciona uma selação de elementos selecionados (retorna uma NodeList);
// // NodeList não é um array, mas sim similar que retorna índice.

// // Para pegar os estilos computados no navegador faremos dessa forma
// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor; 

// for(let tagP of selecionaParagrafos){
//     tagP.style.backgroundColor = backgroundColorBody;
//     tagP.style.color = 'white'

// }

function recebeParagrafos(){
    // Selecionando a o paragrafo
    const tagParagrafo = document.querySelector('.p');
    
    // Selecionando todos paragrafos.
    const selecionaParagrafos = document.querySelectorAll('p');

    // Retorna um array com a tagParagrafo e SelecionaParagrafos.
    return [ tagParagrafo, selecionaParagrafos ];
}

function estilizarParagrafos(paragrafos){
    // Pega os documentos que esta no documento body.
    const estilosBody = getComputedStyle(document.body);
    
    // Adicionando um background da cor do background da página.
    const backgroundColorBody = estilosBody.backgroundColor; 

    // Pecorrendo todos os paragrafos e mudando o background e a cor da font.
    for(let tagP of paragrafos){
        tagP.style.backgroundColor = backgroundColorBody;
        tagP.style.color = 'white'
    }   
}

const [ tagParagrafo, selecionaParagrafos ] = recebeParagrafos();
estilizarParagrafos(selecionaParagrafos);