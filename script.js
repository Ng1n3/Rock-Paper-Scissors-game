const rockButton = document.querySelector('.rock');
const scissorsButton = document.querySelector('.scissors');
const paperButton = document.querySelector('.paper');
const result = document.querySelector('.result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const winner_txt = document.querySelector('.winner-text');
const round_winner = document.querySelector('.round-winner');



//generate random game choice computer
const getComputerChoice = () => {
    const choice = ['Rock', 'Scissors', 'Paper']
    var computerChoice = choice[Math.floor(Math.random()* choice.length)];
     return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

// game algorithm and function calls for events.
const playRound = (playerSelection, computerChoice) => {
    switch(true) {
        case playerSelection === computerChoice:
            drawGame(playerSelection, computerChoice);
            break;
        
        case playerSelection === 'Rock' && computerChoice === 'Scissors':
            wonGame(playerSelection, computerChoice);
            break;
        
        case playerSelection === 'Paper' && computerChoice === 'Rock':
            wonGame(playerSelection, computerChoice);
            break;
        
        case playerSelection === 'Scissors' && computerChoice === 'Paper':
            wonGame(playerSelection, computerChoice);
            break;
        
        default:
            lostGame(playerSelection, computerChoice);
            break;
    }
}

const drawGame = (playerSelection, computerChoice) => {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    winner_txt.textContent = `We have a tie, you both picked ${playerSelection}`;
}

const lostGame = (playerSelection, computerChoice) => {
    computerScore++;
    playerScoreSpan.textContent =  playerScore;
    computerScoreSpan.textContent = computerScore;
    winner_txt.textContent = `you Lost!, ${computerChoice} is greater than ${playerSelection}`;
    if(computerScore == 5) {
        round_winner.textContent = `Bruv you lost :( Your score: ${playerScore} Computer Score: ${computerScore} pls click the reset button to restart game`;
        endGame();
    }
}

const wonGame = (playerSelection, computerChoice) => {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    winner_txt.textContent = `you Won!, ${playerSelection} is greater than ${computerChoice}`;
    if(playerScore == 5) {
        round_winner.textContent = `Nigga you just won :) Your score: ${playerScore} and computer Score: ${computerScore} pls click the reset button to restart game`;
        endGame();
    }
}

const endGame = () => {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

const restartGame = () => {
    restartScores();
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

const restartScores = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    winner_txt.textContent = '';
    round_winner.textContent = '';
}

rockButton.addEventListener('click', () => {
const computerChoice = getComputerChoice();
const playerSelection = 'Rock';
playRound(playerSelection, computerChoice);
console.log(computerChoice);
});

paperButton.addEventListener('click', () => {
const computerChoice = getComputerChoice();
const playerSelection = 'Paper';
playRound(playerSelection, computerChoice);
});

scissorsButton.addEventListener('click', () => {
const computerChoice = getComputerChoice();
const playerSelection = 'Scissors';
playRound(playerSelection, computerChoice);
});