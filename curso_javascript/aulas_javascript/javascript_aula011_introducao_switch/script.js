var opcao = prompt('Escolha uma opção 1 a 2: ')

switch(parseInt(opcao)) {

    case 1:
        //Se parametro === 1
        document.write('Parametro 1')
        break
    case 2:
        // Se o parametro === 2
        document.write('Parametro 2')
        break

    default:
        // Se o parametro nao encontrado
        document.write('Default')

}