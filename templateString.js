const nome = 'Rebeca'
const concetracao = 'Ola ' + nome + '!'
console.log(concetracao)


const template = `
    Ola
    ${nome}!`
console.log(template)
//expressao
console.log(`1+1  ${1+1}`)


const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
