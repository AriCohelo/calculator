let operand1 = 0;
let operand2 = 0;
let addSymbol = 0;
let subSymbol = 0;
let divSymbol = 0;
let multiSymbol = 0;
let result = 0;
let display = document.getElementById('display');

let dot = document.getElementById('dot')
dot.addEventListener('click', function () {
    if (display.textContent === '') {
        return;
    }
    if (display.textContent.includes('.')) return;
    dot.style.backgroundColor = '#E36E00'
    setTimeout(function () {
        dot.style.backgroundColor = '';
    }, 200);
    display.textContent += '.';
})

const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        button.style.backgroundColor = '#E36E00';
        setTimeout(function () {
            button.style.backgroundColor = '';
        }, 200);
        display.textContent += button.textContent;
    });
});
let operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach(button => {
    button.addEventListener('click', function () {
        let lastChar = display.textContent.slice(-1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
            return;
        }

        if (display.textContent === '') {
            return;
        }
        button.style.backgroundColor = '#7D8288'
        setTimeout(function () {
            button.style.backgroundColor = '';
        }, 200);
        if (addSymbol === 1 || subSymbol === 1 || divSymbol === 1 || multiSymbol === 1) {
            equalFunc();
            return;
        }
        if (button.textContent != '=') {
            operand1 = parseInt(display.textContent);
            if (button.textContent === '+') { addSymbol++ }
            if (button.textContent === '-') { subSymbol++ }
            if (button.textContent === '/') { divSymbol++ }
            if (button.textContent === '*') { multiSymbol++ }
            display.textContent = '';

            console.log('operand1 ' + operand1);
        }
    })
})


let equal = document.getElementById('equal');
equal.addEventListener('click', equalFunc)
function equalFunc() {

    operand2 = parseInt(display.textContent);
    display.textContent = '';
    console.log('operand2 ' + operand2);

    if (addSymbol === 1) {
        addFunc(operand1, operand2);
    }
    if (subSymbol === 1) {
        subsFunc(operand1, operand2);
    }
    if (divSymbol === 1) {
        divFunc(operand1, operand2);
    }
    if (multiSymbol === 1) {
        multiFunc(operand1, operand2);
    }
    operand1 = 0;
    operand2 = 0;
    addSymbol = 0;
    subSymbol = 0;
    divSymbol = 0;
    multiSymbol = 0;
}

let backspace = document.getElementById('backspace');
backspace.addEventListener('click', backspaceFunc);
function backspaceFunc() {
    display.textContent = display.textContent.slice(0, -1);
}

let clear = document.getElementById('clear');
clear.addEventListener('click', clearFunc)
function clearFunc() {
    display.textContent = '';
    result = 0;
}

function addFunc(op1, op2) {
    result = op1 + op2;
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

function subsFunc(op1, op2) {
    result = op1 - op2;
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

function divFunc(op1, op2) {
    result = op1 / op2;
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

function multiFunc(op1, op2) {
    result = op1 * op2;
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

