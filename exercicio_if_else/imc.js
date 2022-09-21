const peso=parseFloat(prompt(`Informe seu peso:`))
const altura=parseFloat(prompt(`Informe seu altua:`))
const imc=peso/(Math.pow(altura,2))

if(imc<18.5){
    alert(`Seu imc é ${imc}, voce está abaixo do peso.`)
}else if(imc>=18.5 && imc<=25){
    alert(`Seu imc é ${imc}, voce está com o peso normal.`)
}else if(imc>=25 && imc<=30){
    alert(`Seu imc é ${imc}, voce está acima do peso.`)
}else if(imc<30){
    alert(`Seu imc é ${imc}, voce está obeso.`)
}