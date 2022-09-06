let getComputerChoice = () => {
    const x = ['Rock', 'Paper','Scissors'];
    var computerSelection = x[Math.floor(Math.random()* x.length)];
    // console.log(computerSelection);
     return computerSelection;
}



const computerSelection = getComputerChoice();

let singleRound = (playerSelection, computerSelection) => {
    // var playerSelection = ['rock', 'paper', 'scissors'];
    
            switch (true) {
            case playerSelection == 'rock' && computerSelection == 'Rock':
                return 'We have a tie';

            case playerSelection == 'rock' && computerSelection == 'Paper':
                return 'You lost! Paper is greater than Rock';
            
            case playerSelection == 'rock' && computerSelection == 'Scissors':
                return 'You won! Rock is greater than Scissors';

            case playerSelection == 'paper' && computerSelection == 'Paper':
                return 'We have a tie';
            
            case playerSelection == 'paper' && computerSelection == 'Rock':
                return 'You won! Paper is greater than Rock';
            
            case playerSelection == 'paper' && computerSelection == 'Scissors':
                return 'You lost! Scissors is greater than Paper';
            
            case playerSelection == 'scissors' && computerSelection == 'Scissors':
                return 'We have a tie!';
            
            case playerSelection == 'scissors' && computerSelection == 'Paper':
                return 'You have won! Scissors is greater than paper';
            
            case playerSelection == 'scissors' && computerSelection == 'Rock':
                return 'You lost! Rock is greater than scissors';
        }
        
        
}



let game = () => {
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('chooose your avatar: ');
        playerSelection = playerSelection.toLocaleLowerCase();
        getComputerChoice();
         singleRound(playerSelection, computerSelection);
         if (typeof playerSelection === 'string'){
            if((playerSelection == 'rock' && computerSelection == 'Scissors') || (playerSelection == 'paper' && computerSelection == 'Rock') || (playerSelection == 'scissors' && computerSelection == 'Paper'))
            {
                playerScore += 1;
            } else if ((playerSelection == 'rock' && computerSelection == 'Paper') || (playerSelection == 'paper' && computerSelection == 'Scissors') || (playerSelection == 'scissors' && computerSelection == 'Rock'))
            {
                computerScore += 1;
            }
         } else 
         alert('please check your spelling and try again');

    }

    if (playerScore > computerScore)
    {
        console.log('You won this round!');
    }else 
        console.log('You lost this round!');
}

game();


var playerSelection;
console.log(singleRound(playerSelection, computerSelection));