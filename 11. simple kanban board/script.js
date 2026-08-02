const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");
const addTaskBtn = document.getElementById("add-task");
const list1 = document.getElementById("list1");
const board = document.querySelector(".board");

function makeDraggable(card) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const card of cards) {
  makeDraggable(card);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", this.id);
}
function dragEnd() {
  console.log("drag ended");
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}
function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);

  this.appendChild(card);
  this.classList.remove("over");
}

//create new task
let cardCounter = 0;
addTaskBtn.addEventListener("click", addtask);
function addtask() {
  const taskText = prompt("Enter a new task: ").trim();
  if (taskText != "") {
    const task = document.createElement("div");
    task.id = "card" + cardCounter++;
    task.classList.add("card");
    task.textContent = taskText;

    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "x";
    task.appendChild(deleteBtn);

    task.draggable = true;
    makeDraggable(task);
    list1.appendChild(task);
  } else {
    alert("task cannot be empty");
  }
}

//delete task functionality
board.addEventListener("click", deleteTask);

function deleteTask(e) {
  const deleteBtn = e.target.closest(".delete-btn");

  if (deleteBtn) {
    const card = deleteBtn.closest(".card");
    if (card) {
      if (confirm(`Delete task "${card.textContent.trim()}"?`)) {
        card.remove();
      }
    }
  }
}
