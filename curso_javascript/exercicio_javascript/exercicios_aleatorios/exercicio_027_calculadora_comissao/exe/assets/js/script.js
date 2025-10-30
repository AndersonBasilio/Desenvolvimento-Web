
function calcular(){
    let nomeUsuario = document.querySelector("#nome").value;
    let venda = Number(document.querySelector("#vendas").value);
    let porcentagem = Number(document.querySelector("#porcentagem").value);

    let comissao = venda * (porcentagem / 100);

    if(nomeUsuario === '' || isNaN(venda)|| isNaN(porcentagem)){
        alert('Informações não podem ficar vazia');
        return;
    }
    

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `${nomeUsuario} receberá <strong>R$ ${comissao.toFixed(2)}</strong> de comissão.`;       
};




