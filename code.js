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

        const displayArray = display.textContent.match(/-?\d+/g).map(numero => parseInt(numero, 10));
        console.log(displayArray);
        if (displayArray.length === 2) {
            console.log('displayArray ' + displayArray)
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
    let parsed = [];
    let splited = [];
    operators = ['+', '-', '/', '*']
    let lastChar = display.textContent.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
        return;
    }
    function split(string) {
        for (let i = 0; i < operators.length; i++) {
            if (string.includes(operators[i])) {
                splited = string.split(operators[i])
            }
        }
    }
    split(display.textContent);

    parsed.push(Number(splited[0]));
    parsed.push(Number(splited[1]));

    // parsed = display.textContent.match(/-?\d+/g).map(numero => parseInt(numero, 10));
    console.log('parsed ' + parsed)

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
    result = parsed.reduce((a, b) => a + b)
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

function subsFunc(parsed) {
    result = parsed.reduce((a, b) => a - b)
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

function divFunc(parsed) {
    result = parsed[0] / parsed[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

function multiFunc(parsed) {
    result = parsed[0] * parsed[1];
    if (!Number.isInteger(result)) {
        result = result.toFixed(6);
    }
    console.log('result ' + result);
    display.textContent = result;
};

// cambios de prueba en alt1 para ser fundidos en main