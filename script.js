const Height=document.getElementById("height")
const Weight=document.getElementById("weight")
const Button=document.getElementById("btn")
const bmiResult=document.getElementById('bmi-result')
const bodyCondition=document.getElementById('condition')

Button.addEventListener('click',Click)

function Click(){
    const h=Height.value/100
    const w=Weight.value // +used for number
   

    const bmivalue=w/(h*h)


 

    bmiResult.value=bmivalue

    if(bmivalue<18.5){
        bodyCondition.textContent="Under Weight"
    }
    else if(bmivalue>=18.5 && bmivalue<=24.9){
        bodyCondition.textContent="Normal Weight"
    }
    else if(bmivalue>=25 && bmivalue<=29.5){
    bodyCondition.textContent="Over Weight"
    }
    else if(bmivalue>=30 ){
        bodyCondition.textContent="Obecity"
        }


}
