import { handleVanellopeClick, showCake } from "../assets/script/extra_life.mjs";
import { gameScore } from "../assets/script/gameScore.mjs";
import { gameSpeed } from "../assets/script/gameSpeed.mjs";
import { removeLifeHearts, resetLifeHearts } from "../assets/script/life_heart.mjs";
import { capturePlayerData } from "../assets/script/name_player.mjs";
import { addPlayer } from "../assets/script/playerData.mjs";
import { endgameSound, soundHit, soundHitFail, stopSound } from "../assets/script/sound.mjs";
import state from "../assets/script/states.mjs";

const countDown = () => {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        gameOver();
    }
};

setInterval(() => {
    if (state.values.life === 0 || state.values.currentTime < 20) {
        return;
    } else if (state.values.life !== 3) {
        showCake();
    }
}, 20000);

export const randomSquare = () => {
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
    resetLifeHearts();
};

const gameOver = async () => {
    stopSound('open');
    endgameSound('endgame');
    clearInterval(state.values.timerId);
    clearInterval(state.values.countDownTimerId);

    try {
        await addPlayer();

        const gameOverContainer = document.createElement('div');
        gameOverContainer.classList.add('game-over-container');

        const gameOverMessage = document.createElement('h2');
        gameOverMessage.textContent = `Game Over! Score: ${state.values.result}`;

        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'New Game';
        playAgainButton.addEventListener('click', () => {
            resetGame();
            stopSound('endgame');

            document.body.removeChild(gameOverContainer);
        });

        gameOverContainer.appendChild(gameOverMessage);
        gameOverContainer.appendChild(playAgainButton);

        document.body.appendChild(gameOverContainer);
        disableClickListeners();
    } catch (error) {
        console.error('Game over error', error);
    }
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
        state.values.click++;
        soundHit();

        if (state.values.click % 100 === 0) {
            gameSpeed();
        }
        
        if (state.values.result > 100) {
            gameScore();
        }

    } else if (square.id === state.values.hitPositionLife && state.values.life < 3) {
        soundHit();
        handleVanellopeClick();
    } else {
        state.values.life -= 1;
        removeLifeHearts();
        soundHitFail();
        
        if (state.values.life <= 0) {
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