/*  ----Functions for calculate expenses---- */

// function to convert input value into number.

function getInputInNumber(inputId) {
    const input = document.getElementById(inputId);
    const inputInText = input.value;
    const inputAmount = parseInt(inputInText);
    input.value = '';
    return inputAmount;
}

// function to convert inner text of an element into number.

function getInnerTextInNumber(elementId) {
    const element = document.getElementById(elementId);
    const innerText = element.innerText;
    const innerTextInNumber = parseInt(innerText);
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
    if (income > totalExpenses) {
        balance.innerText = income - totalExpenses;
    } else {
        console.log('expenses is bigger')
    }

}