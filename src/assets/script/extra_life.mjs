import state from "./states.mjs";
import { addLifeHearts } from "./life_heart.mjs";

export const showCake = () => {
    state.view.squares.forEach((square) => {
        square.classList.remove('cake');
    });

    let randomNumber = Math.floor(Math.random() * 10);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('cake');
    state.values.hitPositionLife = randomSquare.id;

    setTimeout(() => {
        hideCake();
    }, 2000);
};

export const hideCake = () => {
    state.view.squares.forEach((square) => {
        square.classList.remove('cake');
    });
};

export const handleVanellopeClick = () => {
    state.values.life += 1;
    addLifeHearts();
    hideCake();
};