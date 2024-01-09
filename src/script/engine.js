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
        gamerVelocity: 1000,
        hitPosition: 0,
        result: 0,
        point: 10,
        life: 3
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
    state.values.timerId = setInterval(randomSquare, state.values.gamerVelocity);
};

const gameOver = () => {

};

const addListenerHitBox = () => {
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            console.log('addlistener',state.values.hitPosition)
            if (square.id === state.values.hitPosition) {
                state.values.result += state.values.point;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            }

            if (square.id !== state.values.hitPosition) {
                state.values.life -= 1;
                state.view.lifeView.textContent = state.values.life;
            }
        })
    })
};


const initialize = () => {
    moveEnemy();
    addListenerHitBox();
};

initialize();