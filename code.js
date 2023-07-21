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
// Operator Buttons
let operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach(button => {
    button.addEventListener('click', function () {

        let verifyLengthAdd = display.textContent.split('+');
        let verifyLengthSubs = display.textContent.split('-');
        let verifyLengthDiv = display.textContent.split('/');
        let verifyLengthMulti = display.textContent.split('*');
        let lastChar = display.textContent.slice(-1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
            return;
        }
        if (verifyLengthMulti.length === 2 || verifyLengthAdd.length === 2 ||
            verifyLengthDiv.length === 2 || verifyLengthSubs.length === 2) {
            equalFunc();
        }
        if (display.textContent === '') {
            return;
        }

        button.style.backgroundColor = '#7D8288'
        setTimeout(function () {
            button.style.backgroundColor = '';
        }, 200);
        if (button.textContent != '=') {
            display.textContent += button.textContent;
        }
    })
})

let equal = document.getElementById('equal');
equal.addEventListener('click', equalFunc)
function equalFunc() {
    let splited = [];
    let parsed = [];
    let lastChar = display.textContent.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
        return;
    }
    //Split 
    if (display.textContent.includes('+')) {
        splited = display.textContent.split('+');
    }
    if (display.textContent.includes('-')) {
        splited = display.textContent.split('-');
    }
    if (display.textContent.includes('/')) {
        splited = display.textContent.split('/');
    }
    if (display.textContent.includes('*')) {
        splited = display.textContent.split('*');
    }
    console.log(splited)
    //Parse
    if (Number.isInteger(Number(splited[0]))) {
        parsed.push(parseInt(splited[0]))
    } else {
        parsed.push(parseFloat(splited[0]))
    }
    if (Number.isInteger(Number(splited[1]))) {
        parsed.push(parseInt(splited[1]))
    } else {
        parsed.push(parseFloat(splited[1]))
    }
    //Call Function
    if (display.textContent.includes('+')) {
        addFunc(parsed)
    }
    if (display.textContent.includes('-')) {
        subsFunc(parsed)
    }
    if (display.textContent.includes('/')) {
        divFunc(parsed)
    }
    if (display.textContent.includes('*')) {
        multiFunc(parsed)
    }

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

function addFunc(parsed) {
    result = parsed[0] + parsed[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

function subsFunc(parsed) {
    result = parsed[0] - parsed[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

function divFunc(parsed) {
    result = parsed[0] / parsed[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

function multiFunc(parsed) {
    result = parsed[0] * parsed[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

