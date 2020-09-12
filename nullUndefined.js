let valor // n inicia
console.log(valor)

valor = undefined  // deixe o sistema definir isso 
console.log(valor)

valor = null  // ausencia de valor inicializia e fica vazia -- padrao pra zerar vaeiavel 
console.log(valor)
//console.valor(valor.toString) // da problema, n existe referencia a to string


const produto = {}
console.log(produto.preco) // o preco n esta definido  produto.preco.a n pode acessar algo n definico
console.log(produto)

produto.preco= 3.50
console.log(produto)

produto.preco = undefined // n usar isso
console.log(!!produto.preco)
console.log(produto)

produto.preco - null// sem preco 
console.log(!!produto.preco)
console.log(produto)

