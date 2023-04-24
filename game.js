function getComputerChoice() {
    const randomNumber= Math.floor(Math.random() * options.length);
    return options[randomNumber]
}
function result(pcChoice,userChoice){
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
function endresult(){

}
const numRounds=5;
let currentRound=1;
let playerCounter=0;
let pcCounter=0;
const options = ["S", "P", "R"];

while(currentRound<=numRounds){
    console.log("Round: "+ currentRound)
    const userChoice = prompt("Select your input. S Scissors, P paper, R rock!").toUpperCase();

    if (!options.includes(userChoice)){
        console.log("Incorrect input");
    }
    else{
        console.log("Player chose: " + userChoice)

        const pcChoice= getComputerChoice();
        console.log("PC chose: " + pcChoice);

        result(pcChoice, userChoice);
        currentRound++;
        console.log("Player " + playerCounter + " / " + pcCounter + " PC")
        
    }
}


