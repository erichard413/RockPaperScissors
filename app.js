const choices = document.querySelector('.RPS');
let wins = 0;
let ties = 0;
let losses = 0;

let playerChoice = "";
choices.addEventListener('click', function(e){
playerChoice = e.target.id;
playRPS();
recordKeeper();
});

function getRPS(){
    let computerChoice = "";
    let num = Math.floor(Math.random()*3);
    if (num > 1 && num <= 2){
        computerChoice = "rock";
    } else if (num >= 1) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}

function playRPS(){
    if (playerChoice === getRPS()){
        const results = document.querySelector('.results');
        const tie = document.createElement('p');
        tie.innerText = (`TIE: You and the computer both chose ${playerChoice}!`);
        results.appendChild(tie);
        ties++;
    } 
    if (playerChoice === "rock"){
        if (getRPS() === "paper"){ 
            const results = document.querySelector('.results');
            const rockLose = document.createElement('p');
            rockLose.innerText = (`LOSS: Computer's paper covers your rock.`);
            results.appendChild(rockLose);
            losses++;
        } else {
            const results = document.querySelector('.results');
            const rockWin = document.createElement('p');
            rockWin.innerText = (`WIN: Your rock breaks computer's scissors!`);
            results.appendChild(rockWin);
            wins++;
        }
    }
    if (playerChoice === "paper"){
        if (getRPS() === "scissors"){ 
            const results = document.querySelector('.results');
            const paperLose = document.createElement('p');
            paperLose.innerText = (`LOSS: Computer's scissors cuts your paper.`);
            results.appendChild(paperLose);
            losses++;
        } else {
            const results = document.querySelector('.results');
            const paperWin = document.createElement('p');
            paperWin.innerText = (`WIN: Your paper covers computer's rock!`);
            results.appendChild(paperWin);
            wins++;
        }
    }
    if (playerChoice === "scissors"){
        if (getRPS() === "rock"){ 
            const results = document.querySelector('.results');
            const scissorsLose = document.createElement('p');
            scissorsLose.innerText = (`LOSS: Computer's rock breaks your scissors.`);
            results.appendChild(scissorsLose);
            losses++;
        } else {
            const results = document.querySelector('.results');
            const scissorsWin = document.createElement('p');
            scissorsWin.innerText = (`WIN: Your scissors cut computer's paper!`);
            results.appendChild(scissorsWin);
            wins++;
        }
    }
}

function recordKeeper(){
    const winTotal = document.getElementById('wins');
    winTotal.innerText = `${wins}`;
    const lossTotal = document.getElementById('losses');
    lossTotal.innerText = `${losses}`;
    const tiesTotal = document.getElementById('ties');
    tiesTotal.innerText = `${ties}`;
}

const button = document.querySelector('.reset');
button.addEventListener('click', function(){
    const results = document.querySelector('.results');
results.innerText = "";
const winTotal = document.getElementById('wins');
winTotal.innerText = "0";
const lossTotal = document.getElementById('losses');
lossTotal.innerText = "0";
const tiesTotal = document.getElementById('ties');
tiesTotal.innerText = "0";
wins = 0;
ties = 0;
losses = 0;
}
)
