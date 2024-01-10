import { endgameSound, soundHit, soundHitFail, stopSound } from "../assets/script/sound.mjs";
import state from "../assets/script/states.mjs";

const countDown = () => {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        gameOver();
    }
};

const randomSquare = () => {
    state.view.squares.forEach((squere) => {
        squere.classList.remove('enemy');
    });
    
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('enemy');
    state.values.hitPosition = randomSquare.id;
};

const moveEnemy = () => {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
    state.values.countDownTimerId = setInterval(countDown, 1000);
};

const resetGame = () => {
    clearInterval(state.values.timerId);
    clearInterval(state.values.countDownTimerId);

    state.values.timerId = null;
    state.values.countDownTimerId = null;
    state.values.gameVelocity = 1000;
    state.values.hitPosition = 0;
    state.values.result = 0;
    state.values.currentTime = 60;
    state.values.point = 10;
    state.values.life = 3;

    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });

    state.view.timeLeft.textContent = state.values.currentTime;
    state.view.score.textContent = state.values.result;
    state.view.lifeView.textContent = state.values.life;

    addListenerHitBox();
    moveEnemy();
    countDown();
};

const gameOver = () => {
    stopSound('open');
    endgameSound('endgame');
    clearInterval(state.values.timerId);
    clearInterval(state.values.countDownTimerId);

    const gameOverContainer = document.createElement('div');
    gameOverContainer.classList.add('game-over-container');

    const gameOverMessage = document.createElement('h2');
    gameOverMessage.textContent = `Game Over! Score: ${state.values.result}`;

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'New Game';
    playAgainButton.addEventListener('click', () => {
        resetGame();

        document.body.removeChild(gameOverContainer);
    });

    gameOverContainer.appendChild(gameOverMessage);
    gameOverContainer.appendChild(playAgainButton);

    document.body.appendChild(gameOverContainer);
    disableClickListeners();
};

const addListenerHitBox = () => {
    if (!document.body.classList.contains('game-over')) {
        state.view.squares.forEach((square) => {
            square.addEventListener('click', handleSquareClick);
        });
    }
};

const handleSquareClick = (event) => {
    const square = event.target;
    if (square.id === state.values.hitPosition) {
        state.values.result += state.values.point;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        soundHit();
    } else {
        state.values.life -= 1;
        state.view.lifeView.textContent = state.values.life;
        soundHitFail();

        if (state.values.life === 0) {
            gameOver();
        }
    }
};

const disableClickListeners = () => {
    state.view.squares.forEach((square) => {
        square.removeEventListener('click', handleSquareClick);
    });
};

const initialize = () => {
    moveEnemy();
    addListenerHitBox();
};

initialize();