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
    const tagParagrafo = document.querySelector('.p');
    const selecionaParagrafos = document.querySelectorAll('p');

    return [ tagParagrafo, selecionaParagrafos ];
}

function estilizarParagrafos(paragrafos){
    const estilosBody = getComputedStyle(document.body);
    const backgroundColorBody = estilosBody.backgroundColor; 

    for(let tagP of paragrafos){
        tagP.style.backgroundColor = backgroundColorBody;
        tagP.style.color = 'white'
    }   
}

const [ tagParagrafo, selecionaParagrafos ] = recebeParagrafos();
estilizarParagrafos(selecionaParagrafos);