"use strict";
let upView = document.querySelector('#upDisplay');
let downView = document.querySelector('#downDisplay');
// function to get number
function enterNum(e) {
    if (downView.innerHTML === '0') {
        downView.innerHTML = e.innerHTML;
    } else {
        downView.innerHTML += e.innerHTML;
    }
    operate();
}
// function to get operator
function enterSign(e) {
    let usedSign = downView.innerHTML.slice(-1);
    if (usedSign === '+' || usedSign === '-' || usedSign === '×' || usedSign === '÷') {
        display.innerHTML = downView.innerHTML.slice(0, -1) + e.innerHTML;
    } else {
        downView.innerHTML += e.innerHTML;
    }
}
function enterClear() {
    downView.innerHTML = ' ';
    upView.innerHTML = ' ';
}
function enterPoint() {
    downView.innerHTML += '.';
}
// function to calculate the result
function operate() {
    let calculate = downView.innerHTML;
    upView.innerHTML = calculate;
    calculate = calculate.replace(/×/g, '*').replace(/÷/g, '/');
    let result;
    try {
        result = eval(calculate);
        // set decimal to 4
        if (result.toString().indexOf('.') !== -1) {
            result = result.toFixed(4);
        }
    } catch (e) {
        result = 'Error';
    }
    downView.innerHTML = result;
}
