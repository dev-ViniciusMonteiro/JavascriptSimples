const imprimenota = function(nota)
{
    switch(Math.floor(nota))
    {
        case 10:
        case 9 :
            console.log('Louvor nota:',nota)
        break//sem o break ele ira executar tudo
        case 8: case 7 :
            console.log('Aprovado com nota:',nota)
        break
        case 6:
            console.log('Aprovado na risca com:',nota)
        break
        case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Recuperacao com nota:',nota)
        break
        default:
            console.log('nota invalida')
        break
    }
}

imprimenota(10)
imprimenota(7)
imprimenota(6.1)
imprimenota(3)
imprimenota(20)