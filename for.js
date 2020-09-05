for(i=1; i<=5; i++)
console.log(`i = ${i} `)

const notas=[5.5,7.5,8.5,10,7]
for(i=0;i<=notas.length;i++)
console.log(`notas: ${notas[i]}`)


for(let m in notas)
console.log(m, notas[m])

const pessoa={
    nome:'laura',
    idade:13,
    peso:50
}
for(let x in pessoa)
console.log(`${x} e ${pessoa[x]}`)