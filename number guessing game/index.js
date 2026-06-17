const number = document.getElementById("number");
const hint = document.getElementById("hint");
const randomNumber = Math.floor(Math.random() * 100);
const guessBtn = document.getElementById("btn");
const attemptsText = document.getElementById("attemptsText");
let attempts = 0;
function guess() {
  if (Number(number.value) == randomNumber)
    hint.textContent = `Your guess is correct: ${randomNumber}`;
  else if (Number(number.value) > randomNumber)
    hint.textContent = "Your guess is too high";
  else hint.textContent = "Your Guess is too low";
  attempts++;
  attemptsText.textContent = attempts;
}
guessBtn.addEventListener("click", guess);
