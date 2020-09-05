const valor = 'global'

function funcao(){
    console.log(valor)
}

function chama(){
    const valor = 'local'
    funcao()
}

chama()


const x = 'global'

function fora(){
    const x = 'dentro'
    function dentro(){
        return x
    }
    return dentro()
}

console.log(fora())
const t = fora()
console.log(t)