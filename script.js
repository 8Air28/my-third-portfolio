const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTask(task);
    input.value = "";
  }
});

function addTask(task) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = task;
  span.addEventListener("click", () => span.classList.toggle("done"));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}
