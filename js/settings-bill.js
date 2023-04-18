// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemType")
// get refences to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings")
var smsTotalSettings = document.querySelector(".smsTotalSettings")
var totalSettings = document.querySelector(".totalSettings")
var warningLevelSetting = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")
//get a ference to the radio add  button
var settingsAddButton = document.querySelector(".radioAddButton")
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var allSettings = 0
var callSettings = 0
var smsSettings = 0
var warningLevel = 0
var criticalLevel = 0
// create a variables that will keep track of all three totals.
var smsTotalThree = document.querySelector(".smsTotalTwo")
var callTotalThree =document.querySelector(".callTotalTwo")
var totalThree = document.querySelector(".totalTwo")

var totalSmses = 0
var totalCalls = 0
var totalCosts = 0
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function calculateSettingsBill() {
    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingsBtn){
        var billItemTypeWithSettings = checkedSettingsBtn.value
    }
    if (billItemTypeWithSettings === "call") {
        totalCalls += callTotalSettings.value;
    }
    else if (billItemTypeWithSettings === "sms") {
            totalSmses += smsTotalSettings.value;
    }
    else {
        totalCosts += 0
    }

    totalCosts = totalCalls + totalSmses;
    callTotalSettings.innerHTML = totalCalls.toFixed(2);
    smsTotalSettings.innerHTML = totalSmses.toFixed(2);
    totalSettings.innerHTML = totalCosts.toFixed(2);


    if (totalCosts >= warningLevelSetting.value) {
        totalThree.classList.add("warning");
    } 
    if (totalCosts >= criticalLevelSetting.value) {
        totalThree.classList.add("danger");
    }
}

updateSettings.addEventListener("click", function(){
    calculateSettingsBill();
});

settingsAddButton.addEventListener("click", function(){
    calculateSettingsBill();
});


/*const callCostText = document.querySelector(".callCostSetting");
const smsCostText = document.querySelector(".smsCostSetting");
const warningText = document.querySelector(".warningLevelSetting");
const criticalText = document.querySelector(".criticalLevelSetting");
const updateSettingsBtn = document.querySelector(".updateSettings");
const buttonAdd = document.querySelector(".AddSettings");
const callTotalThree = document.querySelector(".callTotalSettings");
const smsTotalThree = document.querySelector(".smsTotalSettings");
const totalThree = document.querySelector(".totalSettings");

var totalOfCalls = 0;
callTotalThree.innerHTML = totalOfCalls.toFixed(2)
var totalOfSms = 0;
smsTotalThree.innerHTML = smsTotal.toFixed(2);
var totalOfCost = 0;
totalThree.innerHTML = totalOfCost.toFixed(2);

function settingsBillTotal(){
    var inputCall = callCostText.value;
    var inputSms = smsCostText.value;
    var checkRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkRadioBtn) {
        var billItemTypeWithSettings = checkRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemTypeWithSettings === "call") {
            totalOfCalls += inputCall.toFixed(2);
        }
        else if (billItemTypeWithSettings === "sms") {
            totalOfSms += inputSms.toFixed(2);
        }
    }   console.log(callTotalThree.innerHTML);
        console.log(smsCostText);

    callTotalThree.innerHTML = totalOfCalls.toFixed(2)
    smsTotalThree.innerHTML = totalOfSms.toFixed(2);
    var totalOfCost = totalOfCalls + totalOfSms;
    totalThree.innerHTML = totalOfCost.toFixed(2);

    if (totalOfCost >= criticalText.value) {
        totalThree.classList.add("danger");
    }
    else if (totalOfCost >= warningText.value) {
        totalThree.classList.add("warning");
    }
} */
