let num1 = '';
let num2 = '';
let operator = '';
const operatorList = ["+", "-", "*", "/"];

// Number Pads
const numPad = document.querySelectorAll(".pad");
for (let i = 0; i < numPad.length; i++) {
    numPad[i].addEventListener('click', () => {  
        if (num2 === '' && operator === '') {
            num1 += i.toString()
            num1 = Number(num1)
            display(num1, operator, num2);
        }
        else {
            num2 += i.toString()
            num2 = Number(num2)
            display(num1, operator, num2);
        }
    })
}

// Operator Buttons
const fourOperator = document.querySelectorAll(".operator");
for (let i = 0; i < fourOperator.length; i++) {
    fourOperator[i].addEventListener('click', () => { 
        if (!(num1 === '' && num2 === '')) {
            num1 = operate(num1, operator, num2);
            num2 = '';
        }   
        operator = operatorList[i];
        display(num1, operator, num2);
    })
}

const equal = document.querySelector(".operate");
equal.addEventListener('click', () => {   
    num1 = operate(num1, operator, num2);
    operator = '';
    num2 = '';
    display(num1, operator, num2);
})

// Calculate
function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            num1 = add(num1, num2);
            break;
        case "-":
            num1 = subtract(num1, num2);
            break;
        case "*":
            num1 = multiply(num1, num2);
            break;
        case "/":
            num1 = divide(num1, num2);
            break;
    } 
    return Math.round(num1 * 100) / 100;
}

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

// Display
function display(num1, operator, num2) {
    const display = document.querySelector(".display")
    display.textContent = `${num1} ${operator} ${num2}`;
}
