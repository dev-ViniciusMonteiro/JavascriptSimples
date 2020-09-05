const nota = function(nota){
    try{

    if(nota>=6){
        console.log('aprovado')
    }else{
        console.log('reprovado')
    }}catch{
        console.log('erro')
    }
}

nota(4)
nota(7)
nota('teste')