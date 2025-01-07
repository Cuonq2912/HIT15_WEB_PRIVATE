const input = document.querySelector("input");
const button = document.querySelector("button");
const correct = document.querySelector(".true");
const incorrect = document.querySelector(".false");
const msg = document.querySelector(".messenger");
const grid = document.querySelector(".grid-container");


let stringInput = "";
let correctCount = 0;
let incorrectCount = 0;
let currIndex = -1;

function reset() {
    grid.innerHTML = "";
    correctCount = 0;
    incorrectCount = 0;
    currIndex = -1;
    correct.textContent = "0";
    incorrect.textContent = "0";
    msg.textContent = "";
}

button.addEventListener("click", function () {
    // reset();
    stringInput = input.value;
    if (stringInput === "") return;

    for (let i = 0; i < stringInput.length; i++) {
        const char = stringInput[i];
        const item = document.createElement("div");
        item.classList.add("grid-item");
        item.textContent = char;
        grid.appendChild(item);
    }

    document.addEventListener("keydown", validateInput);
});

function validateInput(e) {
    const gridItems = document.querySelectorAll('.grid-item');
    currIndex++;

    if (currIndex >= stringInput.length) return;

    if (e.key === stringInput[currIndex]) {
        gridItems[currIndex].classList.add("correct");
        correctCount++;
        correct.textContent = correctCount;
    } else {
        gridItems[currIndex].classList.add("incorrect");
        incorrectCount++;
        incorrect.textContent = incorrectCount;
    }

    if (currIndex + 1 === stringInput.length) {
        showNotification();
        document.removeEventListener("keydown", validateInput);
    }
}

function showNotification() {
    if (correctCount === stringInput.length) {
        msg.textContent = "Correct all";
    } else {
        msg.textContent = "Incorrect all";
    }
}
