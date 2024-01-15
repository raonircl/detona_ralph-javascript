import state from "./states.mjs";

export const capturePlayerData = () => {
    return new Promise((resolve) => {
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.innerHTML = `
            <form id="playerNameForm">
                <label for="playerName">Your Name:</label>
                <input type="text" id="playerName" maxlength="3" placeholder="AAA">
                <input type="hidden" id="playerScore" value="${state.values.result}">
                <button type="submit">Save</button>
            </form>
        `;

        const form = nameContainer.querySelector('#playerNameForm');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputName = form.querySelector('#playerName');
            const inputScore = form.querySelector('#playerScore');
            const playerName = inputName.value.toUpperCase().slice(0, 3) || 'AAA';
            const playerScore = parseInt(inputScore.value) || 0;

            const playerData = {
                player: playerName,
                score: playerScore
            };

            resolve(playerData);
            console.log('Dados do jogador', playerData);
            document.body.removeChild(nameContainer);
        });

        document.body.appendChild(nameContainer);
    });
};
