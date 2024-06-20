var altura = prompt(adcione sua altura)
var peso = prompt(Adicione seu peso)
var imc = (peso/(altura*altura))

if(imc <= 18,5){
    console.log('Abaixo do peso')
}
else if(imc > 18,5 && imc <= 25){
    console.log('Normal')
}
else if(imc > 25 && imc < 30){
    console.log('Obesidade')
}
