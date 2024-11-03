const calculatorTitle = document.querySelector('h1');
const buttons=document.querySelectorAll('button');
const resetButton = document.getElementById('resetButton');


function sendnumbervalue(number){
    console.log(number);
}

buttons.forEach((button)=>{
    if(button.classList.length === 0){
        button.addEventListener('click'()=>sendnumbervalue(button.value))
    }
})
