function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}

function result(pcChoice, userChoice) {
  if (pcChoice === userChoice) {
      console.log("It's a tie!");
  } else if (
      (pcChoice === "P" && userChoice === "R") ||
      (pcChoice === "R" && userChoice === "S") ||
      (pcChoice === "S" && userChoice === "P")
  ) {
      console.log("PC wins!");
      ++pcCounter;
  } else {
      console.log("Player wins!");
      ++playerCounter;
  }
}
let playerCounter = 0;
let pcCounter = 0;
const options = ["R", "P", "S"];
let userChoice;

const score = document.createElement("h2");
score.classList.add("score");
let scoreContainer;

function playRound() {
  const pcChoice = getComputerChoice();
  result(pcChoice, userChoice);

  score.textContent = "Player " + playerCounter + " / " + pcCounter + " PC";
  if (playerCounter >= 5 || pcCounter >= 5) {
    announceWinner();
    gameOver = true;
  }

  return !gameOver;
}

function announceWinner(){
  const scoreResult = document.createElement("h3")
  if (playerCounter> pcCounter){
    scoreResult.textContent = "PLAYER WINS"
  }
  else { scoreResult.textContent = "PLAYER LOSES"}
  score.innerHTML = "";
  score.appendChild(scoreResult)
}

function handleChoice() {
  userChoice = this.name;
  if (playRound(userChoice)){    
  }
  else{
    announceWinner();
    disableButtons();
  }
}
function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.removeEventListener("click", handleChoice); // Remove the click event listener
    button.disabled = true; // Disable the button
  });
}
let gameOver = false
document.addEventListener("DOMContentLoaded", function () {
  scoreContainer = document.querySelector(".score-container");

  const buttons = document.querySelectorAll("button");
  if (!gameOver){
    buttons.forEach(button => button.addEventListener("click", handleChoice));
  }
  
  score.textContent = "Player " + playerCounter + " / " + pcCounter + " PC";

  if (scoreContainer) {
    scoreContainer.appendChild(score);
  }

});


