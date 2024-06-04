window.onload=()=>{
    let button =document.querySelector("#submitButton");
    button.addEventListener("click",bmiCalculator);
};

function bmiCalculator(){
    let weight=parseInt(document.querySelector("#weight").value);
    let height=parseInt(document.querySelector("#height").value);
    let bmi=(weight/((height*height)/10000));
    console.log(bmi);
}