let display = document.getElementById('display');
display.textContent = ''

let dot = document.getElementById('dot')
dot.addEventListener('click', function () {

    display.textContent += '.';
})
let one = document.getElementById('one');
one.addEventListener('click', function () {

    display.textContent += 1
})


let add = document.getElementById('add');
add.addEventListener('click', function () {
    let splited = display.textContent.split('+');
    if (splited.length === 2) {
        equalFunc()
    }

})
add.addEventListener('click', function () {

    display.textContent += '+';
})

let equal = document.getElementById('equal');
equal.addEventListener('click', equalFunc)

function equalFunc() {
    let splited = display.textContent.split('+');
    console.log(splited);
    if (display.textContent.includes('+')) {

        suma(splited)
    }

}


function suma(splited) {
    result = parseInt(splited[0]) + parseInt(splited[1]);
    display.textContent = result;
};