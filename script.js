let low = 1;
let high = 10;
let userGuess = 0;
let tries = 0;
let triesLimit = 3;
let triesLeft = 0;
let correct_ans = 0;


const input = document.getElementsByClassName('number-input')[0];
const guessBtn = document.getElementsByClassName('submit-btn')[0];
const Container = document.getElementsByClassName('container')[0];

const hint = document.getElementsByClassName('hint')[0];
/* const playAgain = document.querySelector('.play-again'); */

function initial() {
    input.value = 0;
    tries = 0;
    hint.innerHTML = "<h3>Hint: It is between 1 and 10.<h3>";
    correct_ans = Math.floor(Math.random()*(high-low+1) + low);
    /* hint.innerHTML = `<h3>${correct_ans}<h3>`; */
    hint.style.background = '#6D466B';
}

guessBtn.addEventListener('click', checkGuess);

function checkGuess() {
    tries +=1;
    triesLeft = triesLimit - tries;
    /* console.log(input.value); */

        /* displayLosingMessage(); */
    if(tries == triesLimit && input.value != correct_ans) {
        /* alert('You lose'); */
        displayLosingMessage();
        hint.innerHTML = '';
        hint.style.background = 'white';

    } 
    else {
        if(parseInt(input.value) > correct_ans) {
            hint.innerHTML = `<h3>Hint: It is smaller than ${input.value}<br>Attempts Left: ${triesLeft}</h3>`;
        } else if(parseInt(input.value) < correct_ans) {
            hint.innerHTML = `<h3>Hint: It is greater than ${input.value}<br>Attempts Left: ${triesLeft}</h3>`;
        } else {
            /* hint.innerHTML = `<h3>You Won! <br>tries: ${tries}</h3>`; */
            displayWinningMessage();
            hint.innerHTML = '';
            hint.style.background = 'white';
            
        }

    }

    /* input.value = '0'; */

    
}


function gameAgain() {
    let parent = document.querySelector('.you-won').parentNode;
    parent.removeChild(document.querySelector('.you-won'));
    initial();
    
    /* console.log(parent); */
}

function displayWinningMessage() {
    const youWon = document.createElement('div');
    youWon.classList.add("you-won");
    const winningMsg = document.createElement('h2');
    winningMsg.classList.add("winning-msg");
    winningMsg.innerHTML = `You Won!<br>${correct_ans}, that's the number <br>Attempts: ${tries}`;
    youWon.appendChild(winningMsg);
    /* console.log(you_won); */
    const playAgain = document.createElement('button');
    playAgain.classList.add("play-again");
    playAgain.innerHTML = `Play Again`;
    playAgain.addEventListener('click', gameAgain);
    /* console.log(playAgain); */
    youWon.appendChild(playAgain);

    Container.appendChild(youWon)

    /* hint.innerHTML = '';
    hint.style.background = 'white';
 */
}

function displayLosingMessage() {
    const youWon = document.createElement('div')
    youWon.classList.add("you-won");
    const winningMsg = document.createElement('h2');
    winningMsg.classList.add("winning-msg");
    winningMsg.innerHTML = `You Lose! <br>Correct Answer: ${correct_ans}<br>Attempts Left: ${triesLeft}`;
    youWon.appendChild(winningMsg);
    /* console.log(you_won); */
    const playAgain = document.createElement('button');
    playAgain.classList.add("play-again");
    playAgain.innerHTML = `Play Again`;
    playAgain.addEventListener('click', gameAgain);
    /* console.log(playAgain); */
    youWon.appendChild(playAgain);

    Container.appendChild(youWon)
    
   /*  hint.innerHTML = '';
    hint.style.background = 'white';  */
    

}


initial();




