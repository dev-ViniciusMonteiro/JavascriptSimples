let isAtivo = false
console.log(isAtivo)

isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(!!!isAtivo)//! negacao = true !!negacao negacao = false !!! = true !!!!true

console.log('os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' asd')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo=Infinity))


console.log('ós falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('finalizar:')
console.log(!!(''||null||0||' '))//f ou f ou f ou v 

let nome=''
console.log(nome||'desconhecido')
nome='ze'
console.log(nome||'desconhecido')