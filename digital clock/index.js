const clock = document.getElementById("clock");
const toggle = document.getElementById("toggle");

let is24Hour = false;

function updateClock() {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);

  if (is24Hour) {
    clock.textContent = `${hour.toString().padStart(2, 0)}:${minute}:${second}`;
  } else {
    time = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    clock.textContent = `${hour}:${minute}:${second} ${time}`;
  }
}
toggle.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggle.textContent = is24Hour ? " Switch to 12 Hour" : "Switch to 24 Hour";
  updateClock();
});

setInterval(updateClock, 1000);
updateClock();
