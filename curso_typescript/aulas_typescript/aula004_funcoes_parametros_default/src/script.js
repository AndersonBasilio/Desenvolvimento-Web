"use strict";
function contarHistoria(pesronagem = 'Fubá', atividade = 'Correr no Parque', nome_dono = 'Freddie Mercury') {
    document.write(`Era uma vez um cachorro chamado ${pesronagem}, ele adorava ${atividade},
         seu dono era o ${nome_dono} e eles viveram felizes para sempre.`);
}
contarHistoria(undefined, 'Enterrar Ossos', 'Anderson');
