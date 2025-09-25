const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// ページ読み込み時に保存されたタスクを表示
window.addEventListener("DOMContentLoaded", () => {
  todos.forEach((todo) => addTask(todo.text, todo.done));
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    todos.push({ text: task, done: false });
    saveTodos();
    addTask(task, false);
    input.value = "";
  }
});

function addTask(task, done) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = task;
  if (done) span.classList.add("done");
  span.addEventListener("click", () => {
    span.classList.toggle("done");
    updateTodos();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateTodos();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// localStorageに保存
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 表示内容をもとにtodos配列を更新
function updateTodos() {
  todos = [];
  document.querySelectorAll("#todo-list li").forEach((li) => {
    const span = li.querySelector("span");
    todos.push({
      text: span.textContent,
      done: span.classList.contains("done"),
    });
  });
  saveTodos();
}
