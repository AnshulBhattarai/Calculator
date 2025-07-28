// script.js
function press(num) {
    document.getElementById('display').value += num;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}