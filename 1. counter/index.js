const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const warning = document.getElementById("warning");

function increment() {
  counter.textContent = Number(counter.textContent) + 1;
  warning.textContent = "";
}
function decrement() {
  if (Number(counter.textContent) > 0)
    counter.textContent = Number(counter.textContent) - 1;
  else warning.textContent = "Count number cannot be a negative number";
}
function reset() {
  counter.textContent = 0;
}
function addStep() {
  const step = Number(document.getElementById("step").value);

  counter.textContent = Number(counter.textContent) + step;
}
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
addBtn.addEventListener("click", addStep);
