const choice = ['Pedra', 'Papel','Tesoura']; 
let pWin = 0;
let cWin = 0;
let round = 0; 

const Pedra = document.getElementById('Pedra');
const Papel = document.getElementById('Papel');
const Tesoura = document.getElementById('Tesoura');
const buttons = document.getElementById('buttons');
const result = document.getElementById('result');



function playerSelection() {
    Pedra.addEventListener('click', () => {
        playRound('Pedra')
    });
    Papel.addEventListener('click', () => {
        playRound('Papel')
    });
    Tesoura.addEventListener('click', () => {
        playRound('Tesoura')
    });
}
playerSelection();

                                       
function playRound(playerSelection) {         
    const computerSelection = choice[Math.floor(Math.random() * 3)];
    if ((playerSelection == 'Pedra' && computerSelection == 'Tesoura') || (playerSelection == 'Papel' && computerSelection == 'Pedra') || (playerSelection == 'Tesoura' && computerSelection == 'Papel')) {
        pWin++;
        result.textContent = `Venceste! ${playerSelection} ganha a ${computerSelection}`;    
    } else if (playerSelection == computerSelection) {
        result.textContent = `Empate!`; 
        } else {
            cWin++; 
        result.textContent = `Fudeu! ${computerSelection} ganha a ${playerSelection}`;
        } round++;
        whoWins(pWin, cWin);
    }



    function whoWins(n1, n2) {
        const finalResult = document.getElementById('m');
        if (round > 5) {
        if(n1 > n2) {
           finalResult.textContent = `VENCESTE! Panasca:${n1}  Computador:${n2}  Empates:${5- n1 - n2}`;
        } else if (n1 < n2) {
            finalResult.textContent = `COM OS PORCOS! Panasca:${n1}  Computador:${n2}  Empates:${5- n1 - n2}`;
        } else {
            finalResult.textContent = `EMPATADOS! PPanasca:${n1}  Computador:${n2}  Empates:${5- n1 - n2}`;
        }
        restart();
    }
    } 
    function restart() {
        const button = document.createElement('button')
        button.setAttribute('style', 'display: block; margin: auto; text-align: center; font-family: monospace; font-size: x-large');
        button.textContent = "Esbardalha-te de novo";
        document.body.appendChild(button);
        button.addEventListener('click', () => {
            location.reload();
        })
        }