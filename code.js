let operand1 = undefined;
let operand2 = undefined;
let result = undefined;

let display = document.getElementById('display');
let secondDisplay = document.getElementById('secondDisplay');

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
        if (button.textContent != '=') {



            //Esta linea no funciona porque esta queriendo comprobar el estado de secondDisplay antes de que se ejecute equalFunc()
            //Equal func es quien actualiza secondDisplay entonces no se puede comprobar el ultimo estado de secondDisply desde  aqui

            if (secondDisplay.textContent.slice(-1) === '=') {
                console.log('aca toy')
            }





            if (secondDisplay.textContent.slice(-1) === '+' && display.textContent != '') {
                equalFunc();
                return;
            }
            if (Number.isInteger(Number(display.textContent))) {

                operand1 = parseInt(display.textContent);
            } else {
                operand1 = parseFloat(display.textContent);
            }
            display.textContent = '';
            secondDisplay.textContent = operand1 + button.textContent;

            console.log('operand1 ' + operand1);
        }
    })
})


let equal = document.getElementById('equal');
equal.addEventListener('click', equalFunc)
function equalFunc() {

    operand2 = parseInt(display.textContent);
    display.textContent = '';
    secondDisplay.textContent += operand2 + '=';
    console.log('operand2 ' + operand2);

    if (secondDisplay.textContent.includes('+')) {
        addFunc(operand1, operand2);
    }
    if (secondDisplay.textContent.includes('-')) {
        subsFunc(operand1, operand2);
    }
    if (secondDisplay.textContent.includes('/')) {
        divFunc(operand1, operand2);
    }
    if (secondDisplay.textContent.includes('*')) {
        multiFunc(operand1, operand2);
    }
    operand1 = undefined;
    operand2 = undefined;
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
    secondDisplay.textContent = '';
    result = undefined;
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


