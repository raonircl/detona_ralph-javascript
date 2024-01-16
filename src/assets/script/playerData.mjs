import { capturePlayerData } from "./name_player.mjs";

export const addPlayer = async () => {
    const playerData = await capturePlayerData();

    fetch('https://ill-pear-clam-slip.cyclic.app/player', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Resposta da API:', data);
    })
    .catch((error) => {
        console.error('Erro ao chamar a API:', error);
    });
};