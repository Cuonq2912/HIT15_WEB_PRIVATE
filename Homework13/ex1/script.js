const input = document.querySelector('input');
const button = document.querySelector('button');
const resultText = document.querySelector('#resultText');
const result = document.querySelector('.result-container');

button.addEventListener('click', function () {
    const stringInput = input.value;
    const stringCopy = stringInput.split('').reverse().join('');
    result.innerHTML = '';
    let flag = true;



    if (stringInput === '') {
        resultText.textContent = 'Hãy nhập đúng chuỗi ký tự';
        return;
    }

    for (let i = 0; i < stringInput.length; i++) {
        const span = document.createElement('span');
        span.textContent = stringInput[i];
        span.style.fontWeight = 'bold';
        span.style.fontSize = '18px';
        span.style.padding = '5px 8px';
        span.style.borderRadius = '4px';

        if (stringInput[i] === stringCopy[i]) {
            span.style.backgroundColor = '#0be8a1';
        }
        else {
            flag = false;
            span.style.backgroundColor = 'red';
        }
        result.appendChild(span);
    }
    resultText.textContent = flag ? 'Chuỗi này là Palindrome' : 'Chuỗi này không là Palindrome';

});

input.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
});