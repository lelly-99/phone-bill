// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText")
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
var smsTotalOne = document.querySelector(".smsTotalOne")
var callTotalOne =document.querySelector(".callTotalOne")
var totalOne = document.querySelector(".totalOne")

var smsTotal = 0
var callTotal = 0
var totalCoct = 0
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }else {
        totalCost += 0
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callTotal.toFixed(2);
    smsTotal.innerHTML = smsTotal.toFixed(2);
    var totalCost = callTotal + smsTotal;
    totalCost.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCost.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCost.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);