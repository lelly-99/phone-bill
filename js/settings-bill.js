// get a reference to the sms or call radio buttons
/*var billItemTypeWithSettings = document.querySelector(".billItemType")
// get refences to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings")
var smsTotalSettings = document.querySelector(".smsTotalSettings")
var totalSettings = document.querySelector(".totalSettings")
//get a ference to the radio add  button
var radioAddButton = document.querySelector(".radioAddButton")
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var allSettings = 0
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
        totalCalls += callTotalSettings;
    }
    else if (billItemTypeWithSettings === "sms") {
            totalSmses += smsTotalSettings;
    }
    else {
        totalCosts += 0
    }

    totalCosts = totalCalls + totalSmses;
    callTotalThree.innerHTML = totalCalls.toFixed(2);
    smsTotalThree.innerHTML = totalSmses.toFixed(2);
    totalThree.innerHTML = totalCosts.toFixed(2);

    if (totalCosts > warningLevelSetting) {
        totalThree.classList.add("warning");
    }
    if (totalCosts > criticalLevelSetting) {
        totalThree.classList.add("danger");
    }
}
radioAddButton.addEventListener("click", function(){
    calculateSettingsBill();
});

updateSettings.addEventListener("click", function(){
    calculateSettingsBill();
});
*/