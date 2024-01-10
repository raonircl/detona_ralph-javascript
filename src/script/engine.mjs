import { endgameSound, soundHit, soundHitFail, stopSound } from "../assets/script/sound.mjs";

const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
        lifeView: document.querySelector('#life-view'),
    },
    values: {
        timerId: null,
        countDownTimerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        point: 10,
        life: 3
    },
    actions: {
        
    }
};

const countDown = () => {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0 || state.values.life === 0) {
        gameOver();
    }
};

state.values.countDownTimerId = setInterval(countDown, 1000);

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
};

const gameOver = () => {
    stopSound('open');
    endgameSound('endgame');
    clearInterval(state.values.timerId);
    clearInterval(state.values.countDownTimerId);
    alert(`Fim do jogo! Sua pontuação: ${state.values.result}`);
};

const addListenerHitBox = () => {
    state.view.squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (square.id === state.values.hitPosition) {
                state.values.result += state.values.point;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                soundHit();
            } else {
                state.values.life -= 1;
                state.view.lifeView.textContent = state.values.life;
                soundHitFail();
            }
        });
    });
};


const initialize = () => {
    countDown();
    moveEnemy();
    addListenerHitBox();
};

initialize();