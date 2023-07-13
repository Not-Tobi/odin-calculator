let num1 = '0';
let num2 = '';
let operator = '';
let solution;
let wipeData = false;
function limitCheck() {
    let totalLength = num1 + operator + num2
    if (totalLength.length > 10) {
        alert('You reach the limit!');
        return false;
    }
    else {
        return true
    }
}

// Number Pads
const numBtns = document.querySelectorAll('.pad')
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", () => {
            if (limitCheck()) {
                if (operator === '') {
                    num1 = addNumber(num1, numBtns[i].value);
                }
                else if (operator !== '') {
                    num2 = addNumber(num2, numBtns[i].value);
                    showCurrentSolution();
                }
                display(num1, operator, num2);
            }
        })
}

const operatorBtns = document.querySelectorAll('.operatorBtn')
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        if (num1 !== '' && num2 !== '') {calculation();}
        operator = operatorBtns[i].value;
        display(num1, operator, num2);
    })
}
const equalBtn = document.querySelector('.operate')
equalBtn.addEventListener('click', () => {
    if (num1 === '' || operator === '' || num2 === '') {alert('Please complete your calculation')}
    else {calculation(wipeData = false);}  
})

const decimalBtn = document.querySelector('.decimal')
decimalBtn.addEventListener("click", () => {determineNum1orNum2(addDecimal);})

const removeBtn = document.querySelector('.remove')
removeBtn.addEventListener("click", () => {determineNum1orNum2(removeNumber);})

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {calculation(wipeData = true);})

// Button Functions
function determineNum1orNum2(buttonFunction) {
    if (operator === '') {
        num1 = buttonFunction(num1);
    }
    else if (operator !== '') {
        num2 = buttonFunction(num2);
        showCurrentSolution();
    }
    display(num1, operator, num2);
}

function addNumber(number, index) {
    number += index.toString();
    if (number > 0) {number = Number(number);}
    return number
}

function removeNumber(number) {
    number = number.toString().split('')
    number.pop()
    return number.join('')
}

function addDecimal(number) {
    number = number.toString().split('')
    if (number.some((number) => number === '.')) {
        number = number.join('')
    }
    else {
        number = number.join('')
        number += '.';
    }
    return number;
}

// Calculate
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return Math.round(add(num1, num2) * 100) / 100;
        case '-':
            return Math.round(subtract(num1, num2) * 100) / 100;
        case 'x':
            return Math.round(multiply(num1, num2) * 100) / 100;
        case '÷':
            solution = Math.round(divide(num1, num2) * 100) / 100;
            if (solution === Infinity) {display2(solution = 'ERROR!');}
            return solution;
    }
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

function calculation(wipeData) {
    solution = operate(num1, operator, num2);
    num1 = solution;
    operator = '';
    num2 = '';
    if (wipeData) {num1 = '0'};    
    display(num1, operator, num2);
    display2(solution = '');
}

function showCurrentSolution() {
    solution = operate(num1, operator, num2);
    display2(solution);
}

// Display
function display(num1, operator, num2) {
    let display = document.querySelector('.display')
    display.textContent = `${num1} ${operator} ${num2}`
}

function display2(solution) {
    let display2 = document.querySelector('.display2')
    display2.textContent = `${solution}`
}
