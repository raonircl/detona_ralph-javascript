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

const soundHit = () => {
    const clickSound = document.getElementById('clickSound');

    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Erro ao reproduzir som de hit', error);
    });
};

const soundHitFail = () => {
    const clickSound = document.getElementById('clickSoundFail');

    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Erro ao reproduzir som de hitFail', error);
    });
};

const endgameSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.currentTime = 0;
    audioElement.play().catch(error => {
        console.error(`Erro ao reproduzir som "endgame":`, error);
    });
};

const stopSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.pause();
    audioElement.currentTime = 0;
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