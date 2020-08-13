const choice = ['Rock', 'Paper','Scissors']; 
let pWin = 0;
let cWin = 0;
let round = 0; 

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

function playerSelection() {
	buttons.forEach((button) => {       //iterates event listener for each button
	button.addEventListener('click', () => {
	playRound(button.id);
	})
	})
}
playerSelection();

function playRound(playerSelection) {
    const computerSelection = choice[Math.floor(Math.random() * 3)];
    if (round < 5) {     	
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        pWin++;
        result.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}.`;    
    } else if (playerSelection == computerSelection) {
        result.textContent = `That\s a tie!`; 
        } else {
            cWin++; 
        result.textContent = `YOU LOOSE! ${computerSelection} beats ${playerSelection}.`;
        } round++;
        finalWin(pWin, cWin);
    } else {        //the game is stopped after 5 rounds and the usser needs to click re-start button
        return ;
    }
}

function finalWin(n1, n2) {
        const finalResult = document.getElementById('m');
        if (round == 5) {
        if(n1 > n2) {
           finalResult.textContent = `OH GLORY! You:${n1}  Computer:${n2}  Ties:${5- n1 - n2}`;
        } else if (n1 < n2) {
            finalResult.textContent = `BORN TO LOOSE! You:${n1}  Computer:${n2}  Ties:${5- n1 - n2}`;
        } else {
            finalResult.textContent = `TIED UP! You:${n1}  Computer:${n2}  Ties:${5- n1 - n2}`;
        }
        function restart() {        
        const button = document.createElement('button')
        button.setAttribute('style', 'display: block; margin: auto; padding: 10px; margin-top: 40px; text-align: center; font-family: monospace; font-size: x-large');
        button.textContent = "PROCRASTINATE AGAIN";
        document.body.appendChild(button);
        button.addEventListener('click', () => {
        location.reload();
           }) 
           }; restart()     
        } else {
        return ; //re-start button to appear only at round 5
        } 
    }
    
    
