const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
button.addEventListener('click', () => {
if (button.innerText === '=') {
display.innerText = eval(display.innerText);
} else if (display.innerText === '0') {
display.innerText = button.innerText;
} else {
display.innerText += button.innerText;
}
});
});