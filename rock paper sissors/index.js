const result = document.getElementById("result");
const comChoice = document.getElementById("comChoice");
const answers = ["rock", "paper", "sissors"];

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomChoice = answers[randomIndex];
  comChoice.textContent = randomChoice;
  if (playerChoice === randomChoice) result.textContent = "Draw";
  else if (
    (playerChoice === "paper" && randomChoice === "rock") ||
    (playerChoice === "rock" && randomChoice === "sissors") ||
    (playerChoice === "sissors" && randomChoice === "paper")
  )
    result.textContent = "you win";
  else result.textContent = "you lose";
}

const rock = document.getElementById("rock").addEventListener("click", () => {
  playGame("rock");
});
const paper = document.getElementById("paper").addEventListener("click", () => {
  playGame("paper");
});
const sissor = document
  .getElementById("sissors")
  .addEventListener("click", () => {
    playGame("sissors");
  });
