/*
    Utilizando Axios.
    Para utilizarmos temos que pegar o CDN no site https://github.com/axios/axios
    Colocar antes do script no HTML.

*/
class CarregarDadosUsuario {
    constructor(json) {
        this.json = json;        
    }
    
    percorreTabela() {
        const tabelaCriada = this.criarTabela();

        const cabecalho = this.criaRegistro();

        let th = document.createElement('th');
        th.innerHTML = 'Nome';
        cabecalho.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Idade';
        cabecalho.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Salário';
        cabecalho.appendChild(th);

        tabelaCriada.appendChild(cabecalho);

        for (let pessoas of this.json) {
            let tr = this.criaRegistro();
            
            let td = this.criaDados();
            td.innerHTML = (pessoas.nome);
            tr.appendChild(td);

            td = this.criaDados();
            td.innerHTML = pessoas.idade;
            tr.appendChild(td);

            td = this.criaDados();
            td.innerHTML = pessoas.salario;
            tr.appendChild(td);

            tabelaCriada.appendChild(tr);    
        } 

        this.selecionarDiv(tabelaCriada);
    }

    criarTabela(){
        const table = document.createElement('table');
        return table;
    }

    criaRegistro(){
        const tableRow = document.createElement('tr');
        return tableRow; 
    }

    criaDados(){
        const tableData = document.createElement('td');
        return tableData;
    }

    selecionarDiv(tabela){
        const resultado = document.querySelector('.resultado');
        resultado.appendChild(tabela)
    }
}

// fetch('Pessoas.json')
//     /*
//         Pega a resposta que veio do primeiro then que esta sendo convertido para JSON,
//         isso retorna uma nova promisse.
//     */
//     .then(resposta => resposta.json()) // Já é convertido em objeto javascript.

//     // Pegamos a nova promisse que tem um valor JSON, após mandamos para função.
//     // .then(json => {
//     //     const dados = new CarregarDadosUsuario(json);
//     //     dados.percorreTabela();
//     // });

// Como estamos fazendo get é padrão (UTILIZANDO AXIOS).
axios('pessoas.json')
    .then(resposta => {
        const dados = new CarregarDadosUsuario(resposta.data);
        dados.percorreTabela();
    })
        
    .catch(erro => console.error('Erro ao Carregar JSON: ', erro));

