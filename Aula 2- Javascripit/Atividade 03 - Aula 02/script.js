var preço = prompt('adicione sua altura')
var idade= prompt('adicione seu peso')
var desconto = (preço/idade)

if(idade < 18){
    console.log('Desconto')
}
else if(idade >= 18 ){
    console.log('Sem desconto')
}

