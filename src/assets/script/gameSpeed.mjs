import { randomSquare } from "../../script/engine.mjs";
import state from "./states.mjs"

export const gameSpeed = () => {
    state.values.gameVelocity -= 20;
    clearInterval(state.values.timerId);
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
};