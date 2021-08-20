const dateInput = document.querySelector("#dateInput");
const luckyNumber = document.querySelector("#luckyNumber");
const chkbtn = document.querySelector("#checkk");
const resultDisplay = document.querySelector("#resultDisplay");

// resultDisplay.innerHTML = "hello";


chkbtn.addEventListener("click", function(){
    // console.log(luckyNumber.value);
    const newsum = CalcSum(dateInput.value);
    const del = 0;
    if(newsum%luckyNumber.value === 0){
        resultDisplay.innerHTML = "Yay!! Luckyy";
    }
    else{
        resultDisplay.innerHTML = "Oops!! Not Lucky";
    }
    console.log(newsum);

});

function CalcSum(date){
    dob = date.replaceAll("-","");
    let sum = 0;
    for(var x=0; x<dob; x++){
        sum = sum + Number(dob.charAt(x));
    }
    return sum;
}