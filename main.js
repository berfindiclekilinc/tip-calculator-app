const bill = document.getElementById('bill-charge');
const people = document.getElementById('people-count');
const customInput = document.getElementById('custom-tip');
const tipPerPerson = document.querySelector('#total-tip-per-person');
const totalPerPerson = document.querySelector('#total-amount-per-person');

let tipValue = 0; 
let customValue = 0;


const tipAmount = function() { 
    let tipAmount;
    let total;

    if (customValue !== 0) {
        tipAmount = ((parseInt(customValue) * tipValue) / 100) / parseInt(people.value);
        total = (parseInt(customValue))/parseInt(people.value) + tipAmount;
    } else {
        tipAmount = ((parseInt(bill.value) * tipValue) / 100) / parseInt(people.value);
        total = (parseInt(bill.value))/parseInt(people.value)  + tipAmount;
    }
    

    // tip is above 10.000
    if (tipAmount/10000 > 1){
        tipPerPerson.textContent = "Too much tip!"
    }

    else{
        tipPerPerson.textContent = `$` + tipAmount.toFixed(2);
    }

    // total is above 10.000
    if (total/10000 > 1){
        totalPerPerson.textContent = "Too much total!"
    }

    else{
        totalPerPerson.textContent = `$` + total.toFixed(2);
    }

}

const resetButton = function() {
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    bill.value = "0";
    people.value = "0";
}

// Getting the bill value
const tip = function(e) {
    tipValue = parseInt(e.target.value);
}

// Getting the people value
const customSide = function(e) {
    customValue = e.target.value;
}

// Error messages
const errorFunc = function() {
    const billError = document.querySelector('.error-message');
    bill.value !== "" ? billError.style.visibility = "hidden" : null;

    const peopleError = document.querySelector('#people-error-message');
    people.value !== "" ? peopleError.style.visibility = "hidden" : null;
}

bill.addEventListener("keyup", errorFunc);
people.addEventListener("keyup", errorFunc);
customInput.addEventListener("keyup", errorFunc);