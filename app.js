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
    const totalCost = foodCost + rentCost + clothesCost;
    totalExpensesText.innerText = totalCost;

    const income = getInputInNumber('income');
    const totalExpenses = getInnerTextInNumber('total-expenses');
    const balance = document.getElementById('balance');
    if (income > totalExpenses) {
        balance.innerText = income - totalExpenses;
    } else {
        const showCalculation = document.getElementById('show-calculation');
        const p = document.createElement('p');
        p.innerText = 'Sorry! expenses cannot be bigger than income.'
        p.style.color = 'red';
        showCalculation.appendChild(p);

    }

}
