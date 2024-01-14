import state from "./states.mjs";

export const gameScore = () => {
    if (state.values.life === 3) {
        state.values.point += parseInt(state.values.point * 0.5);
    }
};