import state from "./states.mjs";

export const removeLifeHearts = () => {
    const lifeElements = document.querySelectorAll('.life-heart');
    
    const emptyHeartSrc = '../assets/img/empty-heart.png';

    lifeElements.forEach((lifeElement, index) => {
        if (index >= state.values.life) {
            lifeElement.src = emptyHeartSrc;
        }
    });
};

export const addLifeHearts = () => {
    const lifeElements = document.querySelectorAll('.life-heart');
    
    const fullHeartSrc = '../assets/img/heart.png';

    lifeElements.forEach((lifeElement, index) => {
        if (index < state.values.life) {
            lifeElement.src = fullHeartSrc;
        } 
    });
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
