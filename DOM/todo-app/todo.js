const addTask = document.getElementById("addTask");
const todos = document.getElementById("todos");
const listOfItems = JSON.parse(localStorage.getItem("todo"));

addTask.addEventListener("click", () => {
  const taskValue = document.getElementById("taskValue");
  let todoList = [];
  // First get all existing data from localStorage
  const allTodos = JSON.parse(localStorage.getItem("todo"));

  if (allTodos) {
    // false => null or undefined
    todoList = [...allTodos]; // spread operator
  }
  todoList.push(taskValue.value);
  localStorage.setItem("todo", JSON.stringify(todoList));
  addTodo(taskValue.value);
  taskValue.value = "";
});

const addTodo = (value) => {
  const container = document.createElement("div");
  container.className = "todoContainer";
  const todoContent = document.createElement("p");
  todoContent.innerHTML = value;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  const updateBtn = document.createElement("button");
  updateBtn.innerHTML = "Complete";

  deleteBtn.addEventListener("click", handleDelete);
  updateBtn.addEventListener("click", handleUpdate);

  container.appendChild(todoContent);
  container.appendChild(deleteBtn);
  container.appendChild(updateBtn);

  todos.appendChild(container);
};

const handleDelete = (e) => {
  const allTodos = JSON.parse(localStorage.getItem("todo"));

  const updateItems = allTodos.filter(
    (item) => item === e.target.parentElement.firstChild.innerHTML
  );

  localStorage.setItem("todo", JSON.stringify(updateItems));

  e.target.parentElement.remove();
};
const handleUpdate = (e) => {
  //   e.target.parentElement.firstChild.style.textDecoration = "line-through";

  e.target.parentElement.style.backgroundColor = "green";
};

if (listOfItems && listOfItems.length > 0) {
  listOfItems.map((item) => {
    addTodo(item);
  });
}
// localStorage.setItem('todo', string)
// localStorage.getItem('todo')
// [arry, jkdadbkj, aiudfisud]
