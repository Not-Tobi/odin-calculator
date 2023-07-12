let num1 = '';
let num2 = '';
let operator = '';
let solution;
const operatorList = ['+', '-', '*', '/'];

// Number Pads
const numBtns = document.querySelectorAll('.pad')
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", () => {
        if (operator === '') {
            num1 += i.toString();
            num1 = Number(num1);
        }
        else if (operator !== '') {
            num2 += i.toString();
            num2 = Number(num2);  
            showCurrentSolution();
        }
        display(num1, operator, num2);
    })
}

const operatorBtns = document.querySelectorAll('.operatorBtn')
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        if (num1 !== '' && num2 !== '') {
            solution = operate(num1, operator, num2);
            prepNextCalculation();
        }
        operator = operatorList[i];
        display(num1, operator, num2);
    })
}

const equalBtn = document.querySelector('.operate')
equalBtn.addEventListener('click', () => {
    solution = operate(num1, operator, num2);
    prepNextCalculation();
    display(num1, operator, num2);
})

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
    prepNextCalculation();
    num1 = ''
    display(num1, operator, num2);
})

// Calculate
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return Math.round(add(num1, num2) * 100) / 100;
        case '-':
            return Math.round(subtract(num1, num2) * 100) / 100;
        case '*':
            return Math.round(multiply(num1, num2) * 100) / 100;
        case '/':
            solution = Math.round(divide(num1, num2) * 100) / 100;
            if (solution === Infinity) {
                display2(solution = 'ERROR!');
            }
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

function prepNextCalculation() {
    num1 = solution
    operator = ''
    num2 = ''
    display2(solution = 0)
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
