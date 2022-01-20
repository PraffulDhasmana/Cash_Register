const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const avialableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);
        } else {
            showMessage("Bartan dhone ka irada h kiya");
        }
    } else {
        showMessage("Kuch gadbad hai");
    }
});

function calculateChange(amountToBeReturn) {
    for (let i = 0; i < avialableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturn / avialableNotes[i]);
        console.log("amountToBeReturn"+amountToBeReturn);
        console.log("avialableNotes" +avialableNotes[i]);
        console.log(numberOfNotes);
        amountToBeReturn = amountToBeReturn % avialableNotes[i];
        console.log(amountToBeReturn);
        noOfNotes[i].innerText = numberOfNotes;
    }
    console.log(noOfNotes);
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}