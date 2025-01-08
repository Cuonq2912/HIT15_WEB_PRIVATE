const input = document.querySelector("input")
const button = document.querySelector("button")
const correct = document.querySelector(".true")
const incorrect = document.querySelector(".false")
const msg = document.querySelector(".messenge")
const grid = document.querySelector(".grid-container")

let stringInput = "";
let correctCount = 0;
let incorrectCount = 0;
let currIndex = -1;

function reset() {
    stringInput = "";
    correctCount = 0;
    incorrectCount = 0;
    currIndex = -1;
    grid.innerHTML = "";
    msg.textContent = "";
    correct.textContent = "";
    incorrect.textContent = "";
}

button.addEventListener("click", function () {
    reset();
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
})

function validateInput() {
    const gridItems = document.querySelectorAll(".grid-item");
    currIndex++;

    if (currIndex >= stringInput.length) return;

    if (e.key === stringInput[currIndex]) {
        gridItems[currIndex].classList.add("correct");
        correctCount++;
    } else {
        gridItems[currIndex].classList.add("incorrect");
        incorrectCount++;
    }

    if (currIndex + 1 === stringInput.length) {
        correct.textContent = correctCount;
        incorrect.textContent = incorrectCount;
        showNotification();
        document.removeEventListener("keydown", validateInput);
    }
}

function showNotification() {
    if (correctCount === stringInput.length) {
        msg.textContent = "Correct all";
    }
    else msg.textContent = "Incorrect";
}