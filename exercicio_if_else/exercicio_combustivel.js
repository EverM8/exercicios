mensagem=`Informe com qual combustível irá abastecer:
           A para Álcool
           G par Gasolina`
const combustivel=prompt(mensagem)
const litros=parseFloat(prompt(`Informe quantos litros deseja:`))

if(combustivel=='A'){
    (litros<=25)
        preco=litros*1.90*0.98
        alert(`O valor a ser pago é ${preco} reais.`)
    }else if(litros>25){
         preco=litros*1.9*0.96
         alert(`O valor a ser pago é ${preco} reais.`) 
    }
    if(combustivel=='G'){
        (litros<=25)
            preco=litros*2.7*0.97
            alert(`O valor a ser pago é ${preco} reais.`)
        }else if(litros>25){
             preco=litros*2.7*0.95
             alert(`O valor a ser pago é ${preco} reais.`) 
        }
    



