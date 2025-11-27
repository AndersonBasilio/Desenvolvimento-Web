/*
    2. Contagem regressiva

    Peça ao usuário um número inicial e faça uma contagem regressiva até 0.
*/
class ContagemRegresiva{

    comecarContagem(max, min){
        let contador = max;
        let lista = [];

        while(contador >= min){
            lista.push(contador);
            contador--
        }
        console.log(lista.join(" - "));
    }
}

const regressiva = new ContagemRegresiva();
regressiva.comecarContagem(10, 0);