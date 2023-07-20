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

let add = document.getElementById('add');
add.addEventListener('click', appendPlus);
function appendPlus() {
    let splitedAppendAdd = display.textContent.split('+');
    let splitedSubs = display.textContent.split('-');
    let splitedDiv = display.textContent.split('/');
    let splitedMulti = display.textContent.split('*');
    let lastChar = display.textContent.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
        return;
    }
    if (splitedMulti.length === 2 || splitedAppendAdd.length === 2 ||
        splitedDiv.length === 2 || splitedSubs.length === 2) {
        equalFunc();
    }
    if (display.textContent === '') {
        return;
    }
    add.style.backgroundColor = '#7D8288'
    setTimeout(function () {
        add.style.backgroundColor = '';
    }, 200);
    display.textContent += '+';
}

let subs = document.getElementById('subs');
subs.addEventListener('click', appendMinus);
function appendMinus() {
    let splitedAdd = display.textContent.split('+');
    let splitedSubs = display.textContent.split('-');
    let splitedDiv = display.textContent.split('/');
    let splitedMulti = display.textContent.split('*');
    let lastChar = display.textContent.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
        return;
    }
    if (splitedMulti.length === 2 || splitedAdd.length === 2 ||
        splitedDiv.length === 2 || splitedSubs.length === 2) {
        equalFunc();
    }
    if (display.textContent === '-') {
        return;
    }
    subs.style.backgroundColor = '#7D8288'
    setTimeout(function () {
        subs.style.backgroundColor = '';
    }, 200);
    display.textContent += '-';
}

let division = document.getElementById('division');
division.addEventListener('click', appendDiv);
function appendDiv() {
    let splitedAdd = display.textContent.split('+');
    let splitedSubs = display.textContent.split('-');
    let splitedDiv = display.textContent.split('/');
    let splitedMulti = display.textContent.split('*');
    let lastChar = display.textContent.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
        return;
    }
    if (splitedMulti.length === 2 || splitedAdd.length === 2 ||
        splitedDiv.length === 2 || splitedSubs.length === 2) {
        equalFunc();
    }
    if (display.textContent === '') {
        return;
    }
    division.style.backgroundColor = '#7D8288'
    setTimeout(function () {
        division.style.backgroundColor = '';
    }, 200);
    display.textContent += '/';
}

let multi = document.getElementById('multi');
multi.addEventListener('click', appendMulti)
function appendMulti() {
    let splitedAdd = display.textContent.split('+');
    let splitedSubs = display.textContent.split('-');
    let splitedDiv = display.textContent.split('/');
    let splitedMulti = display.textContent.split('*');
    let lastChar = display.textContent.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
        return;
    }
    if (splitedMulti.length === 2 || splitedAdd.length === 2 ||
        splitedDiv.length === 2 || splitedSubs.length === 2) {
        equalFunc();
    }
    if (display.textContent === '') {
        return;
    }
    multi.style.backgroundColor = '#7D8288'
    setTimeout(function () {
        multi.style.backgroundColor = '';
    }, 200);
    display.textContent += '*';
}

let equal = document.getElementById('equal');
equal.addEventListener('click', equalFunc)
function equalFunc() {
    let parsedAdd = [];
    let parsedSubs = [];
    let parsedDiv = [];
    let parsedMulti = [];
    let splitedAdd = [];
    let splitedSubs = [];
    let splitedDiv = [];
    let splitedMulti = [];
    if (display.textContent.slice(-1) === '+' || display.textContent.slice(-1) === '-' ||
        display.textContent.slice(-1) === '/' || display.textContent.slice(-1) === '*') {
        return;
    }
    if (display.textContent.includes('+')) {
        splitedAdd = display.textContent.split('+');
    }
    if (display.textContent.includes('-')) {
        splitedSubs = display.textContent.split('-');
    }
    if (display.textContent.includes('/')) {
        splitedDiv = display.textContent.split('/');
    }
    if (display.textContent.includes('*')) {
        splitedMulti = display.textContent.split('*');
    }

    //Split Add

    if (Number.isInteger(Number(splitedAdd[0]))) {
        parsedAdd.push(parseInt(splitedAdd[0]))
    } else {
        parsedAdd.push(parseFloat(splitedAdd[0]))
    }
    if (Number.isInteger(Number(splitedAdd[1]))) {
        parsedAdd.push(parseInt(splitedAdd[1]))
    } else {
        parsedAdd.push(parseFloat(splitedAdd[1]))
    }
    //split Subs
    if (Number.isInteger(Number(splitedSubs[0]))) {
        parsedSubs.push(parseInt(splitedSubs[0]))
    } else {
        parsedSubs.push(parseFloat(splitedSubs[0]))
    }
    if (Number.isInteger(Number(splitedSubs[1]))) {
        parsedSubs.push(parseInt(splitedSubs[1]))
    } else {
        parsedSubs.push(parseFloat(splitedSubs[1]))
    }

    // Split Div

    if (Number.isInteger(Number(splitedDiv[0]))) {
        parsedDiv.push(parseInt(splitedDiv[0]))
    } else {
        parsedDiv.push(parseFloat(splitedDiv[0]))
    }
    if (Number.isInteger(Number(splitedDiv[1]))) {
        parsedDiv.push(parseInt(splitedDiv[1]))
    } else {
        parsedDiv.push(parseFloat(splitedDiv[1]))
    }

    // Splited Multi

    if (Number.isInteger(Number(splitedMulti[0]))) {
        parsedMulti.push(parseInt(splitedMulti[0]))
    } else {
        parsedMulti.push(parseFloat(splitedMulti[0]))
    }
    if (Number.isInteger(Number(splitedMulti[1]))) {
        parsedMulti.push(parseInt(splitedMulti[1]))
    } else {
        parsedMulti.push(parseFloat(splitedMulti[1]))
    }

    //Call Func

    if (display.textContent.includes('+')) {
        addFunc(parsedAdd)
    }
    if (display.textContent.includes('-')) {
        subsFunc(parsedSubs)
    }
    if (display.textContent.includes('/')) {
        divFunc(parsedDiv)
    }
    if (display.textContent.includes('*')) {
        multiFunc(parsedMulti)
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
function addFunc(parsedAdd) {
    result = parsedAdd[0] + parsedAdd[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

function subsFunc(parsedNumbers) {
    result = parsedNumbers[0] - parsedNumbers[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

function divFunc(parsedDiv) {
    result = parsedDiv[0] / parsedDiv[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

function multiFunc(parsedMulti) {
    result = parsedMulti[0] * parsedMulti[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    display.textContent = result;
};

