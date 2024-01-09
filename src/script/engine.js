const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
    },
    values: {
        timerId: null,
    }
};

const randomSquare = () => {
    state.view.squares.forEach((squere) => {
        squere.classList.remove('enemy');
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('enemy');
};

const moveEnemy = () => {
    state.values.timerId = setInterval(randomSquare, 1000);
};

const addListenerHitBox = () => {
    state.view.squares.forEach((squares) => {
        // if (squares.id === state)
    })
};

const initialize = () => {
    moveEnemy();
};

initialize();