mensagem=`Informe seu sexo:
          H para homem
          M para mulher`
const sexo=prompt(mensagem)

const altura=parseFloat(prompt(`Informe sua altura em metros:`))

if(sexo=='H'){
    pesoIdeal=(72.7*altura)-58
    alert(`Seu peso ideal é ${pesoIdeal}`)
}else if(sexo==M){
    pesoIdeal=(62.1*altura)-44.7
    alert(`Seu peso ideal é ${pesoIdeal}`)
}