const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML= "❌"
    li.appendChild(span);
    span.innerHTML = newTodo.text;
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoOjb = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoOjb);
    paintTodo(newTodoOjb);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos === parsedToDos;
    parentToDos.forEach(paintTodo);
}