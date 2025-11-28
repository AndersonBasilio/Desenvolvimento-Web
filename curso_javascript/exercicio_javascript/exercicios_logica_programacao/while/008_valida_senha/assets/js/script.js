/*
    8. Validar senha
    Peça ao usuário uma senha e só permita continuar quando ele digitar a senha correta "1234".
*/

class ValidarSenha {

    constructor() {
        this.cadastroSenha = '';
        this.senhaParaLogar = '';
    }

    cadastrarSenha() {
        let senha = prompt('Insira a senha para ser cadastrada:');

        senha = this.verificarCaractares(senha);

        alert('Senha cadastrada com SUCESSO!');
        console.log('Senha cadastrada: ' + senha);

        this.cadastroSenha = senha;
        return senha;
    }

    logarSistema() {
        let senha = prompt('Insira a senha para LOGIN');

        senha = this.verificarCaractares(senha);
        this.senhaParaLogar = senha;

        console.log('Senha para logar: ' + senha);
        return senha;
    }

    verificarCaractares(senha) {
        while (senha.length <= 3) {
            alert('Senha curta, por favor insira uma senha maior.');
            senha = prompt('Insira a senha:');
        }

        return senha;
    }

    verificarAcesso() {
        const resultado = document.querySelector('#resultado');
        return (this.cadastroSenha === this.senhaParaLogar) ? resultado.innerHTML = 'Login realizado com SUCESSO!' : resultado.innerHTML = 'Usuário e/ou senha incorreto!';

    }

    main() {
        this.cadastrarSenha();
        this.logarSistema();
        this.verificarAcesso();
    }
}

const senhaCadastrada = new ValidarSenha();
senhaCadastrada.main();

