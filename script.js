document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;

            if (e.target.classList.contains('number') || e.target.classList.contains('zero')) {
                currentInput += value;
                display.textContent = currentInput;
            } else if (e.target.classList.contains('operator')) {
                if (currentInput === '') return;
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            } else if (e.target.classList.contains('equals')) {
                if (previousInput === '' || currentInput === '') return;
                let result;
                const prev = parseFloat(previousInput);
                const curr = parseFloat(currentInput);

                if (operator === '+') {
                    result = prev + curr;
                } else if (operator === '-') {
                    result = prev - curr;
                } else if (operator === '*') {
                    result = prev * curr;
                } else if (operator === '/') {
                    result = prev / curr;
                }

                display.textContent = result;
                currentInput = result.toString();
                previousInput = '';
                operator = null;
            } else if (e.target.classList.contains('clear')) {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.textContent = '0';
            }
        });
    });
});