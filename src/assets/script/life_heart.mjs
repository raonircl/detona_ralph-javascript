import state from "./states.mjs";

export const removeLifeHearts = () => {
    const lifeContainer = document.querySelector('.menu-lives');
    const remainingLives = state.values.life;
    const lifeElements = document.querySelectorAll('.life-heart');

    while (lifeElements.length > remainingLives) {
        lifeContainer.removeChild(lifeElements[lifeElements.length - 1]);
    }
};

export const resetLifeHearts = () => {
    const lifeContainer = document.querySelector('.menu-lives');
    lifeContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const newHeart = document.createElement('img');
        newHeart.src = '../assets/img/heart.png';
        newHeart.alt = 'life heart';
        newHeart.classList.add('life-heart');
        lifeContainer.appendChild(newHeart);
    }
};
