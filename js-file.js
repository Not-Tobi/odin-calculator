let num1 = 0;
let num2 = '';
let operator = '';
let solution;
let activeClear = false;
const operatorList = ['+', '-', 'x', '÷'];

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

const decimalBtn = document.querySelector('.decimal')
decimalBtn.addEventListener("click", () => {
    if (operator === '') {
        num1 = num1.toString().split('')
        if (num1.some((number) => number === '.')) {
            num1 = num1.join('')
        }
        else {
            num1 = num1.join('')
            num1 += '.';
        }
    }
    else if (operator !== '') {
        num2 = num2.toString().split('')
        if (num2.some((number) => number === '.')) {
            num2 = num2.join('')
        }
        else {
            num2 = num2.join('')
            num2 += '.';
        }
    }
    display(num1, operator, num2);
    
})

const removeBtn = document.querySelector('.remove')
removeBtn.addEventListener("click", () => {
    if (operator === '') {
        num1 = num1.toString().split('')
        num1.pop()
        num1 = num1.join('')
    }
    else if (operator !== '') {
        num2 = num2.toString().split('')
        num2.pop()
        num2 = num2.join('')
        showCurrentSolution();
    }
    display(num1, operator, num2);
})

const operatorBtns = document.querySelectorAll('.operatorBtn')
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        if (num1 !== '' && num2 !== '') {
            calculation();
        }
        operator = operatorList[i];
        display(num1, operator, num2);
    })
}

const equalBtn = document.querySelector('.operate')
equalBtn.addEventListener('click', () => {
    activeClear = false;
    calculation(activeClear);
})

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
    activeClear = true;
    calculation(activeClear);
})

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

function calculation(activeClear) {
    solution = operate(num1, operator, num2);
    num1 = solution;
    operator = '';
    num2 = '';
    if (activeClear) {num1 = '0'};    
    display(num1, operator, num2);
    display2(solution = 0);
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
