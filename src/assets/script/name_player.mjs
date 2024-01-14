export const capturePlayerName = () => {
    return new Promise((resolve) => {
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.innerHTML = `
            <form id="playerNameForm">
                <label for="playerName">Digite seu nome (3 caracteres): </label>
                <input type="text" id="playerName" maxlength="3" pattern="[A-Za-z]{3}" required>
                <button type="submit">Confirmar</button>
            </form>
        `;

        const form = nameContainer.querySelector('#playerNameForm');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const input = form.querySelector('#playerName');
            const playerName = input.value.toUpperCase().slice(0, 3) || 'AAA';
            resolve(playerName);

            document.body.removeChild(nameContainer);
        });

        document.body.appendChild(nameContainer);
    });
};