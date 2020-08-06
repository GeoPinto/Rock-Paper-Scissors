const choice = ['Rock', 'Paper','Scissors']; //These are the choices to be played, defined as an array
let pWin = 0;
let cWin = 0; // win count, starting at 0

function computerPlay(){
    return choice[Math.floor(Math.random() * 3)];                                   //Math.random randomly picks an index in [0,1[, but we have [0,2]                                      //so Math.random() * 3. But this are floating, and can be in [2,3] 
}                                                   //Hence, Math.floor() returns the maximum integer lower or equal
                                                    // to the  value, thus in the [0,2]

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); //make a string case insensitive
}

                                       
function playRound(playerSelection, computerSelection) {
    let ps = capitalize(playerSelection);           //for a cleaner code, the paramters have been abbreviated
    let cs = computerSelection;
    if ((ps == 'Rock' && cs == 'Scissors') || (ps == 'Paper' && cs == 'Rock') || (ps == 'Scissors' && cs == 'Paper')) {
        pWin++;
        return `You win! ${ps} beats ${cs}`;    //use `` to directly write strings under return
    } else if (ps == cs) {
        return `It's a tie!`; 
        } else {
            cWin++;  //adds 1 value to the variable, or one victory
        return `You loose! ${cs} beats ${ps}`;
        }
    }

    function game() {           //it's a loop of 5x playRound(), but with with player choice prompted
        let round = 0;
        while(round < 5) {
            let playerSelection = prompt('What is your move?');
            const computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
            round++;
        }
        whoWins(pWin, cWin); //after the 5x (see how it's after the loop), results are presented
    }

    function whoWins(n1, n2) {
        let message = document.getElementById("m"); //links a variable to an html element
        if(n1 > n2) {
            message.innerHTML = `You WIN! Player - ${n1}  Computer - ${n2}  Ties - ${5- n1 - n2}`;
        } else if (n1 < n2) {
            message.innerHTML = `You LOOSE! Player - ${n1}  Computer - ${n2}  Ties - ${5- n1 - n2}`;
        } else {
            message.innerHTML = `It's a tie! Player - ${n1}  Computer - ${n2}  Ties - ${5- n1 - n2}`;
        }
    } //the results are shown directly in the position of the html element with id = "m"
    

