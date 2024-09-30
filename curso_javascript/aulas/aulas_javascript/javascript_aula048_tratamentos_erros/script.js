

// netflix
var video = Array();
video[1] = Array();
video[1]['Nome'] = 'Fullmetal Alchemist';
video[1]['Categoria'] = 'Anime';

function getVideo(video){
    try {
        //Lógica
        //http
        console.log(video[0]['Nome']);

    } catch(erro){
        tratarErro(erro)
        console.log('Agora podemos tratar o erro.');
        throw new Error('Houve um erro, mas não se preocupe estamos trabalhando nisso.');

    } finally {
        console.log('Sempre passa por aqui.');
    }

    console.log('A aplicação não morreu. ');
}

function tratarErro(e){
    //Lógica para registrar o erro no servidor
    console.log(e);
}

getVideo(video);