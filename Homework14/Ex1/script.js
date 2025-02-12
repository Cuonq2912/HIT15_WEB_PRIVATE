const typingText = document.querySelector('.typing-text');
const dateTimeArea = document.querySelector('.dateTime-area');
const tagInput = document.querySelector('.tag-input');
const addButton = document.querySelector('button');
const listTodo = document.querySelector('.list-todo');

function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const weekdays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const weekday = weekdays[date.getDay()];
    return `${hours}:${minutes} ${weekday} ${month}-${day}-${year}`;
}

addButton.addEventListener('click', function () {

    const divTask = document.createElement("div");
    divTask.classList.add("task-item");
    divTask.innerHTML = `
    <p>${typingText.value}</p>
    <p>📅 ${formatDateTime(dateTimeArea.value)}</p>
    <p>🏷️ ${tagInput.value}</p>
    <div class="tool"></div>`;

    const toolItems = divTask.querySelector('.tool');
    toolItems.innerHTML = `
    <button id="completeBtn">Complete</button>
    <button id="editBtn">Edit</button>
    <button id="deleteBtn">Delete</button>`;

    listTodo.appendChild(divTask);
    typingText.value = "";

    const completeBtn = toolItems.querySelector('#completeBtn');
    completeBtn.addEventListener('click', function () {
        if (completeBtn.innerHTML === 'Undo') {
            completeBtn.innerHTML = 'Complete';
            completeBtn.style.padding = '.4em 1em';

        } else {
            completeBtn.innerHTML = 'Undo';
            completeBtn.style.padding = '.4em 1.9em';
        }
    })

    const editBtn = toolItems.querySelector('#editBtn');
    editBtn.addEventListener('click', function () {
        const taskText = divTask.querySelector('p:first-child');
        if (editBtn.innerHTML === 'Save') {
            const inputField = divTask.querySelector('.edit-input');
            taskText.innerHTML = inputField.value;
            editBtn.innerHTML = 'Edit';
            inputField.remove();
        } else {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = taskText.innerHTML;
            inputField.classList.add('edit-input');
            taskText.innerHTML = '';
            taskText.appendChild(inputField);
            editBtn.innerHTML = 'Save';
            editBtn.style.backgroundColor = '#3bb355';
        }
    })

    const deleteBtn = toolItems.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click', function () {
        divTask.remove();
    })
})