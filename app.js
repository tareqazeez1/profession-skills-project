

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

// function to show error message.

function showError(message) {
    const showCalculation = document.getElementById('show-calculation');
    const p = document.createElement('p');
    p.innerText = message;
    p.style.color = 'red';
    showCalculation.appendChild(p);
}

/*  ----Functions for calculate expenses---- */

function calculateExpenses() {
    const foodCost = getInputInNumber('food-cost');
    const rentCost = getInputInNumber('rent-cost');
    const clothesCost = getInputInNumber('clothes-cost');
    const income = getInputInNumber('income');

    const totalCost = foodCost + rentCost + clothesCost;

    let totalExpensesText = document.getElementById('total-expenses');
    totalExpensesText.innerText = totalCost;


    const totalExpenses = getInnerTextInNumber('total-expenses');
    const balance = document.getElementById('balance');
    if (isNaN(totalCost) == true || isNaN(income) == true) {
        totalExpensesText.innerText = '00';         // to make total expense 00 when input is invalid

        // It will show an error when any input is invalid

        showError('Please provide a valid number!')

    }
    else if (income >= totalExpenses) {
        balance.innerText = income - totalExpenses;
    } else {
        // It will show an error when income is less than expenses

        showError('Sorry! expenses cannot be bigger than income')

    }

}


/*-------Function to calculate save percentage and remaining balance after save -----*/

function calculateSaving() {
    const savePercentage = getInputInNumber('save-percentage');
    const balance = getInnerTextInNumber('balance');

    const saving = (savePercentage / 100) * balance;
    if (typeof savePercentage == 'number' && savePercentage > 0) {
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = saving.toFixed(2);
    } else {
        showError('Please provide a valid input to save money!')
    }
    const savingAmount = getInnerTextInNumber('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = (balance - savingAmount).toFixed(2);

}


// done