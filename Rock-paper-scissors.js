let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    };

updateScoreElement();

/*
if(!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}*/

function autoplaying() {
    const buttonElement = document.querySelector('.auto-play-button');
    if(buttonElement.innerText === 'Auto Play') {
        buttonElement.innerHTML = 'Stop';
        buttonElement.classList.add('is-Stop');
    }
    else {
        buttonElement.innerHTML = 'Auto Play';
        buttonElement.classList.remove('is-Stop');
    }
}

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
    if (!isAutoPlaying) {
       intervalID = setInterval(() => {
            const playerMove = pickCompMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
    }
    else {
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
    
}

function playGame(playerMove)
{
    const compMove = pickCompMove();
    let result = '';
    if(playerMove === 'Scissors')  {
        if (compMove === 'Rock') {
            result = 'You lose';
        }
        else if (compMove === 'Paper') {
            result = 'You win';
        }
        else if(compMove === 'Pencil') {
            result = 'You win';
        }
        else if (compMove === 'Scissors') {
            result = 'Tie';
        }
    }
    else if (playerMove === 'Paper') {
        if (compMove === 'Rock') {
            result = 'You win';
        }
        else if (compMove === 'Paper') {
            result = 'Tie';
        }
        else if (compMove === 'Pencil') {
            result = 'You lose';
        }
        else if (compMove === 'Scissors') {
            result = 'You lose';
        }
    }
    else if (playerMove === 'Pencil') {
        if (compMove === 'Rock') {
            result = 'You lose';
        }
        else if (compMove === 'Paper') {
            result = 'You win';
        }
        else if (compMove === 'Pencil') {
            result = 'Tie';
        }
        else if (compMove === 'Scissors') {
            result = 'You lose';
        }
    }
    else if (playerMove === 'Rock')  {
        if (compMove === 'Rock') {
            result = 'Tie';
        }
        else if (compMove === 'Paper') {
            result = 'You lose';
        }
        else if (compMove === 'Pencil') {
            result = 'You lose';
        }
        else if (compMove === 'Scissors') {
            result = 'You win';
        }
    }

    if (result === 'You win') {
       score.wins +=1;
    }
    else if (result === 'You lose') {
        score.losses += 1;
    }
    else if (result === 'Tie') {
        score.ties +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${compMove}-emoji.png" class="move-icon">
Computer`;

}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}


function pickCompMove() {
    const randomNumber = Math.random(); 
    let compMove = '';
   // let result = '';
    if(randomNumber >= 0 && randomNumber < 1/4)
    {
        compMove = 'Rock';
    }
    else if(randomNumber >= 1/4 && randomNumber < 1/2)
    {
        compMove = 'Paper';
    }
    else if(randomNumber >= 1/2 && randomNumber < 3/4)
    {
        compMove = 'Pencil';
    }
    else if(randomNumber >= 3/4 && randomNumber < 1)
    {
        compMove = 'Scissors';
    }
    return compMove; //doesnt run code after this
}