const addBtn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector(".todo-list");

addBtn.addEventListener("click", function () {
    const stringInput = input.value;
    if (stringInput === "") return;

    const li = document.createElement("li");
    li.textContent = stringInput.trim();

    if (li.textContent === "") return;
    else {
        li.innerHTML = `
        <p>${li.textContent}</p>
        <button class="Delete">Delete</button>`;
        list.appendChild(li);
        input.value = "";

        const deleteBtn = li.querySelector(".Delete");
        deleteBtn.addEventListener("click", function () {
            list.removeChild(li);
        })
    }
})