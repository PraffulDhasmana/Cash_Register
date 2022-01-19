var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button")
var noOfNotes = document.querySelector(".no-of-notes")
var message = document.querySelector("#error-message")


const avialableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("Check", function run() {

    hideMessage();

    if (billAmount.value > 0) {

        if (cashGiven.value > billAmount.value) {

            var amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);

        } else {
            showMessage("Bartan dhone ka irada h kiya");
        }
    } else {
        showMessage("Kuch gadbad hai");
    }

})

function calculateChange(amountToBeReturn) {
    for (let i = 0; i < avialableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturn / avalableNotes[i]);
        amountToBeReturn = amountToBeReturn % avialableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}