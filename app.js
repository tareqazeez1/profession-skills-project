/*  ----Functions for calculate expenses---- */

// function to convert input value into number.

function getInputInNumber(inputId) {
    const input = document.getElementById(inputId);
    const inputInText = input.value;
    const inputAmount = parseFloat(inputInText);
    input.value = '';
    return inputAmount;
}

// function to convert inner text of an element into number.

function getInnerTextInNumber(elementId) {
    const element = document.getElementById(elementId);
    const innerText = element.innerText;
    const innerTextInNumber = parseFloat(innerText);
    return innerTextInNumber;
}

// function to calculate all the expenses.
function calculateExpenses() {
    const foodCost = getInputInNumber('food-cost');
    const rentCost = getInputInNumber('rent-cost');
    const clothesCost = getInputInNumber('clothes-cost');

    let totalExpensesText = document.getElementById('total-expenses');
    totalExpensesText.innerText = foodCost + rentCost + clothesCost;


    const income = getInputInNumber('income');
    const totalExpenses = getInnerTextInNumber('total-expenses');
    const balance = document.getElementById('balance');
    if (income >= totalExpenses) {
        balance.innerText = income - totalExpenses;
    } else {
        // To show an error when income is less than expenses
        const showCalculation = document.getElementById('show-calculation');
        const p = document.createElement('p');
        p.innerText = 'Sorry! expenses cannot be bigger than income.'
        p.style.color = 'red';
        showCalculation.appendChild(p);

    }

}


// Function to calculate save percentage and remaining balance after save.

function calculateSaving() {
    const savePercentage = getInputInNumber('save-percentage');
    const balance = getInnerTextInNumber('balance');

    const saving = (savePercentage / 100) * balance;
    if (typeof savePercentage == 'number' && savePercentage > 0) {
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = saving.toFixed(2);
    }
    const savingAmount = getInnerTextInNumber('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = (balance - savingAmount).toFixed(2);

}