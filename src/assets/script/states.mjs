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
        hitPositionLife: 0,
        result: 0,
        currentTime: 61,
        point: 10,
        life: 3,
        click: 0
    }
};

export default state;