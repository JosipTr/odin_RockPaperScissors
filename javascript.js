function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random() * array.length)];
}

function singleRound(choice, computerChoice) {
    if (choice === "Rock" && computerChoice === "Scissors") return "You won!";
    if (choice === "Paper" && computerChoice === "Rock") return "You won!";
    if (choice === "Scissors" && computerChoice === "Paper") return "You won!";
    if (choice === "Rock" && computerChoice === "Paper") return "You lost!";
    if (choice === "Paper" && computerChoice === "Scissors") return "You lost!";
    if (choice === "Scissors" && computerChoice === "Rock") return "You lost!";
    else return "Draw! Play again.";
}

let rock = document.querySelector("#rockBtn");
let paper = document.querySelector("#paperBtn");
let scissors = document.querySelector("#scissorsBtn");
let result = document.querySelector(".result");

let resultText = document.createElement("p");
let mainResult = document.createElement("p");
let playerNumberResult = document.createElement("span");
let computerNumberResult = document.createElement("span");

let playerFlag = 0;
let computerFlag = 0;

function check(something) {
    if (something.includes("Draw")) {
        playerNumberResult.textContent = playerFlag;
        computerNumberResult.textContent = computerFlag;
    }
    if (something.includes("won")) {
        playerFlag++;
        playerNumberResult.textContent = playerFlag;
        computerNumberResult.textContent = computerFlag;
    }
    if (something.includes("lost")) {
        computerFlag++;
        computerNumberResult.textContent = computerFlag;
        playerNumberResult.textContent = playerFlag;
    }
    if (playerFlag === 5) {
        mainResult.textContent = "You won. GAME OVER!";
        playerFlag = 0;
        computerFlag = 0;
    }
    if (computerFlag === 5) {
        mainResult.textContent = "You lost. GAME OVER!";
        computerFlag = 0;
        playerFlag = 0;
    } 
}

rock.addEventListener('click', function(){
    let computerChoice = computerPlay();
    let something = singleRound("Rock", computerChoice);
    resultText.textContent = "You chose Rock and computer chose " + computerChoice;
    mainResult.textContent = something;
    check(something);
})

paper.addEventListener('click', function(){
    let computerChoice = computerPlay();
    let something = singleRound("Paper", computerChoice);
    resultText.textContent = "You chose Paper and computer chose " + computerChoice;
    mainResult.textContent = something;
    check(something);
})

scissors.addEventListener('click', function(){
    let computerChoice = computerPlay();
    let something = singleRound("Scissors", computerChoice);
    resultText.textContent = "You chose Scissors and computer chose " + computerChoice;
    mainResult.textContent = something;
    check(something);
})

result.appendChild(resultText);
result.appendChild(mainResult);

playerNumberResult.style.margin = "100px"

result.appendChild(playerNumberResult);
result.appendChild(computerNumberResult);
