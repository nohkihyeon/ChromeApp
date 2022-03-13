const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML= "❌"
    li.appendChild(span);
    span.innerHTML = newTodo;
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);