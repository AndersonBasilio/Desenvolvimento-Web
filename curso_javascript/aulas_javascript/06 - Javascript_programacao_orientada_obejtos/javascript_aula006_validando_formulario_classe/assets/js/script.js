class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhaSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado');
            this.formulario.submit();

        }

    }

    camposSaoValidos(){
        let valido = true;

        for(let erroTexto of this.formulario.querySelectorAll('.mensagemErro')){
            erroTexto.remove();
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){
            let label = campo.previousElementSibling.innerText;
            
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valido = false;
            }  
            
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valido = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valido = false;
            }
        }

        return valido;
    }

    senhaSaoValidas(){
        let valido = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirSenha');

        if(senha.value !== repetirSenha.value){
            valido = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valido = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valido;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF Inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('mensagemErro');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();
